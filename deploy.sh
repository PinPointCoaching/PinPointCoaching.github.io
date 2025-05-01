#!/bin/bash
# deploy.sh - A simple script for committing changes and pushing them to the remote repository.

# Navigate to the repository directory if necessary.
# For example, if the repo is at ~/Projects/pinpoint-website, uncomment and adjust the next line:
# cd ~/Projects/pinpoint-website

# Prompt the user for a commit message, with a default value.
read -p "Enter commit message [Automated update via deploy script]: " commit_message
commit_message=${commit_message:-"Automated update via deploy script"}

echo "Staging all changes..."
git add .

echo "Creating commit with message: \"$commit_message\""
git commit -m "$commit_message"

echo "Pushing changes to remote (branch master)..."
git push -u origin master

echo "Deployment triggered. Please check your live site!"

