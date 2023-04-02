FROM node:19.7-alpine

# Create and change to the app directory.

# Set environment variables
ENV MONGO_URI="mongodb+srv://HadiAlhlow:vZ7lSHAdZvkaIbNd@cluster0.4gvxsk0.mongodb.net/sukana"
ENV SECRET="HOWYOUDOIN"

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