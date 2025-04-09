const axios = require('axios');
const { copilotApiKey } = require('./config');

// 与 GitHub Copilot API 的交互逻辑
class CopilotService {
    static async sendErrorToCopilot(errorMessage) {
        try {
            const response = await axios.post(
                'https://api.github.com/copilot/solutions',
                {
                    query: errorMessage,
                },
                {
                    headers: {
                        Authorization: `Bearer ${copilotApiKey}`,
                    },
                }
            );

            return response.data.solution;
        } catch (error) {
            console.error('请求 Copilot API 出错：', error.message);
            return '无法从 Copilot 获取解决方案，请检查 API 配置。';
        }
    }
}

module.exports = CopilotService;
