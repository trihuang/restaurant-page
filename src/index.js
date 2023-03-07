import './style.css';
import { changeToHomeTab } from './home';
import { changeToMenuTab } from './menu';
import { changeToContactTab } from './contact';

const content = document.getElementById('content');
const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');
const logo = document.querySelector('.logo');

const tabs = ["Home", "Menu", "Contact"];
let currentTab = tabs[0];

homeTab.addEventListener('click', changeTab);
menuTab.addEventListener('click', changeTab);
contactTab.addEventListener('click', changeTab);
logo.addEventListener('click', changeTab);

function changeTab(e) {
    if (e.target.classList.contains('home') && currentTab === tabs[0] || e.target.classList.contains('logo') && currentTab === tabs[0]) {
        return;
    } else if (e.target.classList.contains('menu') && currentTab === tabs[1]) {
        return;
    } else if (e.target.classList.contains('contact') && currentTab === tabs[2]) {
        return;
    } else if (e.target.classList.contains('home') || e.target.classList.contains('logo')) {
        currentTab = tabs[0];
        removeAllChildNodes(content);
        updateTabs(currentTab);
        changeToHomeTab();
    } else if (e.target.classList.contains('menu')) {
        currentTab = tabs[1];
        removeAllChildNodes(content);
        updateTabs(currentTab);
        changeToMenuTab();
    } else if (e.target.classList.contains('contact')) {
        currentTab = tabs[2];
        removeAllChildNodes(content);
        updateTabs(currentTab);
        changeToContactTab();
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateTabs(current) {
    if (current === tabs[0]) {
        homeTab.classList.add('active');
        homeTab.classList.remove('text-light');
        menuTab.classList.remove('active');
        menuTab.classList.add('text-light');
        contactTab.classList.remove('active');
        contactTab.classList.add('text-light');
    } else if (current === tabs[1]) {
        menuTab.classList.add('active');
        menuTab.classList.remove('text-light');
        homeTab.classList.remove('active');
        homeTab.classList.add('text-light');
        contactTab.classList.remove('active');
        contactTab.classList.add('text-light');
    } else if (current === tabs[2]) {
        contactTab.classList.add('active');
        contactTab.classList.remove('text-light');
        homeTab.classList.remove('active');
        homeTab.classList.add('text-light');
        menuTab.classList.remove('active');
        menuTab.classList.add('text-light');
    }
}

//changeToHomeTab();