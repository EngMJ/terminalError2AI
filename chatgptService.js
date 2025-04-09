const axios = require('axios');
const { openAIApiKey } = require('./config');

class ChatGPTService {
    static async sendErrorToChatGPT(errorMessage) {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-4', // 可选择的模型，比如 gpt-4 或 gpt-3.5-turbo
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant who provides solutions for programming errors.' },
                        { role: 'user', content: `Here is an error message: "${errorMessage}". Please help identify the issue and provide a possible solution.` },
                    ],
                    max_tokens: 1000, // 限制返回的最大 token 数
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${openAIApiKey}`,
                    },
                }
            );

            // 返回 ChatGPT 的回复
            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('Error while communicating with ChatGPT API:', error.message);
            return 'Unable to get a response from ChatGPT. Please check your API key or network connection.';
        }
    }
}

module.exports = ChatGPTService;
