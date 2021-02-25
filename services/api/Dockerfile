ARG NODEJS_BASE
FROM ${NODEJS_BASE}

RUN mkdir /service
WORKDIR /service

ADD package.json .
ADD package-lock.json .
RUN npm install --production && npm dedupe

ADD index.js .
COPY controllers controllers
COPY lib lib

ARG UCD_LIB_SERVER_REPO_HASH
ARG UCD_LIB_SERVER_REPO_TAG
ENV UCD_LIB_SERVER_REPO_HASH ${UCD_LIB_SERVER_REPO_HASH}
ENV UCD_LIB_SERVER_REPO_TAG ${UCD_LIB_SERVER_REPO_TAG}

CMD node index.js