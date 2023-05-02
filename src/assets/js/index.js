// Header, Tabs
import "../styles/qkt-events.scss";
import dropdown from "./components/dropdown";
import header from "./components/header";
import tabs from "./components/tabs";
import modal from "./components/modal";
// Tabs
tabs({
    listSelector: '[data-tablist]'
});
// Dropdown
dropdown();
// Header
header();
// Modal
modal();
