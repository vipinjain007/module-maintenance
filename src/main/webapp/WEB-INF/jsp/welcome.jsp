<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>

<link rel="stylesheet" type="text/css"
	href="webjars/bootstrap/3.3.7/css/bootstrap.min.css" />

<!-- 
	<spring:url value="/css/main.css" var="springCss" />
	<link href="${springCss}" rel="stylesheet" />
	 -->
<c:url value="/css/main.css" var="jstlCss" />
<link href="${jstlCss}" rel="stylesheet" />

</head>
<body>
    
   <div class="receivedBox">
     <label for="AnalysisID" style="width:60px,align:left;">AnalysisID:</label>
	 <input id="analysis_id" type="text" step="width:45px">
	 <button onclick="checkOutageStatus();">checkOutageStatus</button> 
     
	</div>
   <div class="resultBox" id="result"></div>	
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="/js/common.js"></script>
	<script type="text/javascript" src="/js/resultdataMap.js"></script>
	
     
</body>

</html>
