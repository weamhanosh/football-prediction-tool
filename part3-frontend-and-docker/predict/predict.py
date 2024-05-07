from flask import Flask, request
import json
from flask_cors import CORS

from prediction_model import PredictionModel

app = Flask(__name__)
CORS(app, origins="*")


@app.route('/')
def index():
    return "Prediction server is up and running!"


@app.route('/predict', methods=['POST'])
def predict():
    user_input = json.loads(request.get_data().decode(encoding="utf-8", errors="ignore"))
    prediction_model = PredictionModel(user_input)
    prediction = prediction_model.predict()
    return {"prediction": f"{prediction}"}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, debug=True)
