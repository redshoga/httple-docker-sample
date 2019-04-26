FROM node:slim
EXPOSE 3000
WORKDIR workspace
COPY /src /workspace
RUN npm install
ENTRYPOINT npm run start
