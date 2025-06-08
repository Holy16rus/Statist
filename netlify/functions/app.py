from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="../..")


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join("../..", path)):
        return send_from_directory("../..", path)
    else:
        return send_from_directory("../..", "index.html")


def handler(event, context):
    return app(event, context)
