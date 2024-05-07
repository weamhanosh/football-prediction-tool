#!/bin/bash

echo "Waiting for training to complete..."

# Wait until the training_complete file exists in the models directory
while [ ! -f /predict/models/training_complete ]; do
  sleep 1
done

echo "Training completed. Starting prediction service..."

touch /predict/models/predict_complete

# Start your prediction service here
python predict.py
