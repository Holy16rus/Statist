from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Путь к файлу с данными
DATA_FILE = "visitor_data.json"


def load_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    return {"visitors": [], "total_visits": 0}


def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)


@app.route("/api/visit", methods=["POST"])
def record_visit():
    data = load_data()
    ip = request.json.get("ip")
    timestamp = datetime.now().isoformat()

    # Добавляем нового посетителя
    visitor = {"ip": ip, "timestamp": timestamp}
    data["visitors"].append(visitor)
    data["total_visits"] = len(data["visitors"])

    save_data(data)
    return jsonify({"total_visits": data["total_visits"]})


@app.route("/api/stats", methods=["GET"])
def get_stats():
    data = load_data()
    return jsonify(
        {
            "total_visits": data["total_visits"],
            "unique_visitors": len(set(v["ip"] for v in data["visitors"])),
        }
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)
