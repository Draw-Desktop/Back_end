require('dotenv').config();
const express = require('express');
// const expressSanitizer  = require('express-sanitizer');
const compression = require('compression');
const methodOverride = require('method-override');
const morgan = require('morgan');
var cors = require('cors');
const {specs} = require('./swagger.config.js');
const SwaggerUi = require('swagger-ui-express');
const { response, errResponse } = require('./response.js');
const BaseError = require('./error.js');
const status = require('./response.status.js');

module.exports = function () {
    // // fs and https 모듈 가져오기
    // const https = require("https");
    // const fs = require("fs")

    // // certificate와 private key 가져오기
    // // ------------------- STEP 2
    // const options = {
    //     key: fs.readFileSync("./key/cert.key"),
    //     cert: fs.readFileSync("./key/cert.crt"),
    // };
    const app = express();

    app.use(compression()); // 데이터 압축
    app.use(express.json()); // application/json타입으로 들어오는 데이터를 req.body로 파싱해주는 역할
    app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded타입으로 들어오는 데이터를 req.body로 파싱해주는 역할
    app.use(methodOverride()); // method-override
    app.use(morgan('dev')); // 로그 확인 (response 색상 입힌 개발용)
    app.use("/", express.static("public")); // 정적 파일 접근
    app.use(cors()); //자신이 속하지 않은 다른 도메인, 다른 프로토콜, 혹은 다른 포트에 있는 리소스를 요청하는 cross-origin HTTP 요청 방식
    // app.use(expressSanitizer());
    // swagger
    app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

    //router
    require('../src/notice/notice.route')(app); //예시 라우트   notice.route.js를 통해 연결되는 route, controller, provider, service, dto, dao 는 예시이다. 추후 삭제 예정

    // error handling
    app.use((req, res, next) => {
        const err = new BaseError(status.NOT_FOUND);
        next(err);
    });
    
    app.use((err, req, res, next) => {
        console.error(err);
        
        console.log(err.data ? err.data.status : 'Unknown status'); // 수정
        console.log(err.data ? err.data.message : 'Unknown message'); // 수정
        // 템플릿 엔진 변수 설정
        res.locals.message = err.message;
        // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
        res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
        res.status(err.data ? err.data.status : status.INTERNAL_SERVER_ERROR).send(response(err.data));
    });
    
    // https 의존성으로 certificate와 private key로 새로운 서버를 시작
    // https.createServer(options, app).listen(443, () => {
    //     console.log(`HTTPS server started on port 443`);
    // });

    return app;
};
