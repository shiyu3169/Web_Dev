<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset='utf-8' />
        <title>Demo Home Page</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="css/style.css" />
    </head>
    <header>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                        <li><a href="statistics/" target="_blank">Statistics</a></li>
                        <li><a href="source/" target="_blank">Source</a></li>
                        <li><a href="search/" target="_blank">Search</a></li>
                        <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                        <li><a href="textview/" target="_blank">TextView</a></li>
                        <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                        <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                        <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
                        <li><a href="blog/" target="_blank">Blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <body> 
        <hr />
        <hr />
        
        <div class="col-sm-2">
            <img class="img-responsive" src="DSC02922.JPG" alt="me"/>
            <p>Hi, my name is Shiyu Wang. I’m an international student from China. I'm currently pursue bachelor and master combined major in Computer Sciense in Northeastern University.</p>
            <p>Welcome to my home page! I will post my web works and assignments here. </p>
        </div>
        <div class="col-sm-8">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="text-center panel-title">CS4550 Assignments</h3>
                </div>
                <div class="panel-body">
                    <a href="assignments/html/studyList.html">Assignment 1 HTML</a>
                    <hr />
                    <a href="assignments/css/profile.html">Assignment 2 CSS</a>
                    <hr />
                    <a href="assignments/jquery/profile.html">Assignment 3 JavaScript</a>
                    <hr />
                    <a href="http://nodejs-shiyuwang.rhcloud.com/assignments/angular/profile.html">Assignment 4 AngularJS, NodeJS & OpenShift</a>
                </div>
            </div>
            <div class="panel panel-warning" >
                <div class="panel-heading">
                    <h3 class="text-center panel-title">CS4550 Project</h3>
                </div>
                <div class="panel-body">
                    <a href="project/idea.html">Project Idea</a>
                    <hr />
                    <a href="http://projectjs-shiyuwang.rhcloud.com/">Project</a>
                    <hr />
                    <a href="https://www.youtube.com/watch?feature=player_embedded&v=CW1ClCyvJY8">Project Presentation</a>
                    <hr />
                    <a href="https://github.com/cliff316912991/Web/tree/master/projectjs">Project SourceCode</a>
                </div>
            </div>
        </div>
        <div class="col-sm-2">
        </div>
    </body>
</html>
