#!/bin/sh
#
###################
#
#javac -deprecation -classpath $CATALINA_HOME/common/lib/servlet-api.jar WEB-INF/src/WebCrawler.java
#mv -f  WEB-INF/src/WebCrawler.class  WEB-INF/classes/
jar cf /var/lib/tomcat5.5/webapps/dwtloader.war *
rm -fr /var/lib/tomcat5.5/webapps/dwtloader
ls -l  /var/lib/tomcat5.5/webapps/
