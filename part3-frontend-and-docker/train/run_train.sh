#!/bin/bash

# Run your training process here
echo "Training process started..."
python train.py

# Training process completed, notify Docker Compose
echo "Training process completed."
touch /train/models/training_complete
