# SQLI and XSS Attacks in Web Applications: A Case Study
This project is for the Capstone Essay for [Nate Arkin](https://twitter.com/natearkin) and [Garret Poole](https://twitter.com/garret_poole). Server code will be under the [Server Folder](https://github.com/narkin/web-app-threat-case-study/tree/main/Server), and client code will be in the [Client Folder](https://github.com/narkin/web-app-threat-case-study/tree/main/Client). 
## Changelog
### 10/4/2021
- Hypervisor Standup
  - XCP-ng HV
  - 3 VMs
    - Windows 10 Terminal Installation
    - Ubuntu Server 20.04 LTS
    - pfSense Firewall
### 10/5/2021
- Configured isolation network in firewall vm
  - [Wrote this config file](https://github.com/narkin/web-app-threat-case-study/blob/main/config-FIREWALL.XSS-SQLI-NET.xml)
- Windows 10 VM users created, Github and VS Code installed
- Created and uploaded login page for testing on client
### 10/13/2021
- Started development of [server side code](https://github.com/narkin/web-app-threat-case-study/tree/main/Server/server.js)
### 10/14/2021
- Migrated test environment to Raspberry PI for transportability.
- Uploaded Garret's test tables to sql server
- Connected server code to sql server
- Garret wrote client side code to make http request to web server
### Some data is missing from here, probably from a failed rebase we performed
### 10/26/2021
- Nate begun work on admin api
### 10/28/2021
- Nate finished admin api
- Nate & Garret wrote client side javascript to display served client information
