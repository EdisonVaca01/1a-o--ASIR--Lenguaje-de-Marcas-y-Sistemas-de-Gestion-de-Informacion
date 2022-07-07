<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method = "html"/>
    <xsl:template match = "/">
        <html>
            <head>
                <title>xsltLenguajeMarcas.xsl</title>
            </head>
            <body>
              <table border="1" width = "50%">
                <tr bgcolor="#9acd32">
                    <td>Nombre</td>
                    <td>Num votos</td>
                </tr>
                <xsl:for-each select = "//partido">
                   <xsl:choose>
                        <xsl:when test = "./votos  > '10'">  
                          <tr>
                            <td><xsl:value-of select = "./nombre"/></td>
                            <td><xsl:value-of select = "./votos"/></td>
                          </tr>
                        </xsl:when>
                        <xsl:otherwise>  
                            <p>Este partido <xsl:value-of select="./nombre"/> no ha conseguido los votos necesarios</p>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:for-each>
              </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
