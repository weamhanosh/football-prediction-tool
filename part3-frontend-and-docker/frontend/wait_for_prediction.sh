#!/bin/bash

echo "Waiting for predict to start..."

# Wait until the predict_complete file exists in the models directory
while [ ! -f /frontend/models/predict_complete ]; do
  sleep 1
done

echo "Predict completed. Starting frontend service..."

# Start your frontend service here
npm run preview
