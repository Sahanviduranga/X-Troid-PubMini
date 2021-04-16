FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SLdevilX/WhatsAsenaDuplicated /root/X-Troid
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
