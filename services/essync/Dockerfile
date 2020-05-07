ARG CORE_SERVER_REPO_TAG
FROM ucdlib/fin-node-utils:${CORE_SERVER_REPO_TAG} as fin-node-utils
FROM node:12

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm install -g
ENV NODE_PATH /usr/local/lib/node_modules

RUN mkdir /service
WORKDIR /service

COPY package.json .
COPY package-lock.json .
RUN npm install --production && npm dedupe

COPY lib lib
COPY schemas schemas
COPY index.js .
COPY reindex.js .

ARG UCD_LIB_SERVER_REPO_HASH
ARG UCD_LIB_SERVER_REPO_TAG
ENV UCD_LIB_SERVER_REPO_HASH ${UCD_LIB_SERVER_REPO_HASH}
ENV UCD_LIB_SERVER_REPO_TAG ${UCD_LIB_SERVER_REPO_TAG}

CMD node index.js
