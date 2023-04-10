FROM node:19.7-alpine

# Create and change to the app directory.

# Set environment variables
ENV MONGO_URI="mongodb+srv://HadiAlhlow:vZ7lSHAdZvkaIbNd@cluster0.4gvxsk0.mongodb.net/sukana"
ENV SECRET="HOWYOUDOIN"
ENV FIREBASE_API_KEY="AIzaSyBOY3PcrRTpz4PuPHECj_PMQhnmLghcvNs"
ENV APPID="1:670053495123:web:75e103fa4f68d18501f1a6"
ENV PROJECT_ID="sukanav1"

# Create and change to the app directory.
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

RUN npm install 
RUN npm ci --only=production
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]