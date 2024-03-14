 - docker-compose up -d
 - add sprykerdeck ip to container /etc/hosts file by adjusting docker-compose.yml ("yves.de.spryker.local:192.168.86.141")
 - ./docker-run.sh scripts/script.js

Grafana:
   - http://localhost:3000
   - admin:admin
   - add datasource: http://influxdb:8086 -> database k6
   - import dashboard: [k6 Load Testing Results-1710271833103.json](k6%20Load%20Testing%20Results-1710271833103.json)

Notes:
 https://github.com/grafana/xk6-output-influxdb#docker-compose

Dashboards:
 https://grafana.com/grafana/dashboards/?search=k6+load



![2024-03-12_20-33.png](2024-03-12_20-33.png)
![2024-03-12_20-33_1.png](2024-03-12_20-33_1.png)
