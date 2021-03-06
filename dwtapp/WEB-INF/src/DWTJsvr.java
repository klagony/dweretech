/*
 * Copyright 1999,2004 The Apache Software Foundation.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public final class DWTJsvr extends HttpServlet {


    /**
     * Respond to a GET request for the content produced by
     * this servlet.
     *
     * @param request The servlet request we are processing
     * @param response The servlet response we are producing
     *
     * @exception IOException if an input/output error occurs
     * @exception ServletException if a servlet error occurs
     */
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
      throws IOException, ServletException {

	response.setContentType("text/html");
	PrintWriter writer = response.getWriter();

	writer.println("<html>");
	writer.println("<head>");
	writer.println("<title>Dwere Application Servlet Apps</title>");
	writer.println("</head>");
	writer.println("<body bgcolor=white>");
	
	writer.println("<table border=\"1\" width=\"50%\" align=\"center\">");
	writer.println("<tr>");
	writer.println("<td>");
	writer.println("<img src=\"images/dwt-logo.gif\">");
	writer.println("</td>");
	writer.println("<td>");
	writer.println("<h1>Dwere Application Servlet</h1>");
	writer.println("The servlet is working...<br>");
	writer.println("Dwere application console... <br>It displays the");
	writer.println("request headers from the request we are currently");
	writer.println("processing.");
	writer.println("</td>");
	writer.println("</tr>");

	Enumeration names = request.getHeaderNames();
	while (names.hasMoreElements()) {
	    String name = (String) names.nextElement();
	    writer.println("<tr>");
	    writer.println("  <th align=\"right\">" + name + ":</th>");
	    writer.println("  <td>" + request.getHeader(name) + "</td>");
	    writer.println("</tr>");
	}
	writer.println("<tr>");
 	writer.println("  <td><a href=\"/dwtloader\">Main</a></td>");
	writer.println("</tr>");
	writer.println("</table>");

	writer.println("</body>");
	writer.println("</html>");

    }


}
