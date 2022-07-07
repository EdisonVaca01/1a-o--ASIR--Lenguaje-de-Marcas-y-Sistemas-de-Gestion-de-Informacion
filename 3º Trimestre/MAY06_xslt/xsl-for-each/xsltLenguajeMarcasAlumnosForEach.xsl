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
                    <td>Apellidos</td>
                    <td>Edad</td>
                </tr>
                <xsl:for-each select = "//persona">
                    <xsl:if test="@idAlumno='2'">
                        <tr>
                          <td><xsl:value-of select = "./nombreAlumno"/></td>
                          <td><xsl:value-of select = "./apellido"/></td>
                          <td><xsl:value-of select = "./edad"/></td>
                        </tr>
                    </xsl:if>
                    <xsl:if test="@idAlumno!='2'">
                        <tr>
                          <td><xsl:value-of select = "./nombreAlumno"/>DISTINTO</td>
                          <td><xsl:value-of select = "./apellido"/></td>
                          <td><xsl:value-of select = "./edad"/></td>
                        </tr>
                    </xsl:if>
                </xsl:for-each>
              </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
