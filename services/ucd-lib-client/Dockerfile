ARG CORE_SERVER_REPO_TAG
FROM ucdlib/fin-node-utils:${CORE_SERVER_REPO_TAG} as fin-node-utils
FROM node:12

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm link
ENV NODE_PATH /usr/local/lib/node_modules

RUN mkdir /service
WORKDIR /service

ADD package.json .
ADD package-lock.json .
RUN npm install --production && npm dedupe

ADD index.js .
ADD config.js .
COPY client client
COPY controllers controllers
COPY lib lib
COPY models models

# hack for now.  Build internal
RUN cd /service && npm install
RUN cd /service/client/public && rm package-lock.json
RUN cd /service/client/public && npm install
RUN cd /service && npm run build

ARG UCD_LIB_SERVER_REPO_HASH
ARG UCD_LIB_SERVER_REPO_TAG
ENV UCD_LIB_SERVER_REPO_HASH ${UCD_LIB_SERVER_REPO_HASH}
ENV UCD_LIB_SERVER_REPO_TAG ${UCD_LIB_SERVER_REPO_TAG}

CMD node index.js