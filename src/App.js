import './App.css';
import React, {Component} from 'react';
import Body from './components/Body';
class App extends Component{

    render(){
    return (
        <div>
  {/* ============================================================== */}
  {/* Preloader - style you can find in spinners.css */}
  {/* ============================================================== */}
  <div className="preloader">
    <div className="lds-ripple">
      <div className="lds-pos" />
      <div className="lds-pos" />
    </div>
  </div>
  {/* ============================================================== */}
  {/* Main wrapper - style you can find in pages.scss */}
  {/* ============================================================== */}
  <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
    {/* ============================================================== */}
    {/* Topbar header - style you can find in pages.scss */}
    {/* ============================================================== */}
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin6">
          {/* ============================================================== */}
          {/* Logo */}
          {/* ============================================================== */}
          <a className="navbar-brand" href="index.html">
            {/* Logo icon */}
            <b className="logo-icon">
              {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
              {/* Dark Logo icon */}
              <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
            </b>
            {/*End Logo icon */}
            {/* Logo text */}
            <span className="logo-text">
              {/* dark Logo text */}
              <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
            </span>
          </a>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* toggle and nav items */}
          {/* ============================================================== */}
          
        </div>
        {/* ============================================================== */}
        {/* End Logo */}
        {/* ============================================================== */}
        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
          {/* ============================================================== */}
          {/* toggle and nav items */}
          {/* ============================================================== */}
          <ul className="navbar-nav me-auto mt-md-0 ">
            {/* ============================================================== */}
            {/* Search */}
            {/* ============================================================== */}
            <li className="nav-item hidden-sm-down">
              <form className="app-search ps-3">
                <input type="text" className="form-control" placeholder="Search for..." /> 
              </form>
            </li>
          </ul>
          {/* ============================================================== */}
          {/* Right side toggle and nav items */}
          {/* ============================================================== */}
          <ul className="navbar-nav">
            {/* ============================================================== */}
            {/* User profile and search */}
            {/* ============================================================== */}
            <li className="nav-item dropdown">
            
              <ul className="dropdown-menu show" aria-labelledby="navbarDropdown" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {/* ============================================================== */}
    {/* End Topbar header */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Left Sidebar - style you can find in sidebar.scss  */}
    {/* ============================================================== */}
    <aside className="left-sidebar" data-sidebarbg="skin6">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            {/* User Profile*/}
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="me-3 far fa-clock fa-fw" aria-hidden="true" /><span className="hide-menu">Dashboard</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-profile.html" aria-expanded="false">
                <i className="me-3 fa fa-user" aria-hidden="true" /><span className="hide-menu">Profile</span></a>
            </li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-basic.html" aria-expanded="false"><i className="me-3 fa fa-table" aria-hidden="true" /><span className="hide-menu">Table</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="icon-fontawesome.html" aria-expanded="false"><i className="me-3 fa fa-font" aria-hidden="true" /><span className="hide-menu">Icon</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="map-google.html" aria-expanded="false"><i className="me-3 fa fa-globe" aria-hidden="true" /><span className="hide-menu">Google Map</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="blank.html" aria-expanded="false"><i className="me-3 fa fa-columns" aria-hidden="true" /><span className="hide-menu">Blank</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="404.html" aria-expanded="false"><i className="me-3 fa fa-info-circle" aria-hidden="true" /><span className="hide-menu">Error 404</span></a></li>
            
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    {/* ============================================================== */}
    {/* End Left Sidebar - style you can find in sidebar.scss  */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Page wrapper  */}
    {/* ============================================================== */}
    <div className="page-wrapper">
      {/* ============================================================== */}
      {/* Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-md-6 col-8 align-self-center">
            <h3 className="page-title mb-0 p-0">Dashboard</h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Container fluid  */}
      {/* ============================================================== */}
      <Body/>
      {/* ============================================================== */}
      {/* End Container fluid  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* footer */}
      {/* ============================================================== */}
      <footer className="footer text-center">
        © 2021 Monster Admin by <a href="https://www.wrappixel.com/">wrappixel.com</a>
      </footer>
      {/* ============================================================== */}
      {/* End footer */}
      {/* ============================================================== */}
    </div>
    {/* ============================================================== */}
    {/* End Page wrapper  */}
    {/* ============================================================== */}
  </div>
  {/* ============================================================== */}
  {/* End Wrapper */}
</div>
    );
}
}
export default App;
