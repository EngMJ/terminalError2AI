const readline = require('readline');
const ChatGPTService = require('./chatgptService');
const { language } = require('./config');

// 创建读取终端输入的接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

console.log('错误处理程序已启动，等待错误信息...\n');

rl.on('line', async (line) => {
    const errorMessage = line.trim();

    if (errorMessage) {
        console.log('\n捕获到错误信息：', errorMessage);
        console.log('正在发送到 ChatGPT 获取解决方案...\n');

        try {
            // 发送到 ChatGPT
            const chatGPTSolution = await ChatGPTService.sendErrorToChatGPT(errorMessage);
            console.log(
                `\n=== ChatGPT 回复 (${language === 'zh' ? '中文' : '英文'}) ===\n`,
                chatGPTSolution
            );
        } catch (err) {
            console.error('请求 ChatGPT 失败：', err.message);
        }
    }
});
