//경로x => 같은 폴더(경로표시해야됨)x just 내장된거 불러옴 file system 
const fs = require('fs');
//Console : 클래스임 ! (대문자써라) - 특정 클래스만 불러왔음
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

// 로그호출경로 , 에러호출경로
const logger = new Console({ stdout : output, stderr : errorOutput })
const count = 5;

logger.log('count: %d', count);
logger.error('count: '+ count);