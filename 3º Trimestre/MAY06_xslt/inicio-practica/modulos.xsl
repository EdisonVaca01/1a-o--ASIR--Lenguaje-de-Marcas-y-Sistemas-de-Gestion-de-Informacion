<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : modulos.xsl
    Created on : 6 de mayo de 2022, 10:11
    Author     : Alumno
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:variable name = "totalPaco" select = "sum()"/>
    <xsl:variable name = "totalNaza" select = "sum()"/>
    <xsl:variable name = "totalSergio" select = "sum()"/>
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Práctica 6</title>
            </head>
            <body>
                <!-- PARTE DE AUTOR PENDIENTE -->
                <xsl:for-each>
                    <h1>Modulos de <xsl:value-of/></h1>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Profesor</th>
                            <th>Tecnologias</th>
                        </tr>
                        <xsl:sort/>
                        <xsl:for-each>
                            <tr>
                                <td><xsl:value-of/></td>
                                <td><xsl:value-of/></td>
                                <td><xsl:value-of/></td>
                                <td><xsl:value-of/></td>
                            </tr>
                        </xsl:for-each>
                    </table>
               </xsl:for-each>
               
               <h1>Profesores</h1>
               <xsl:for-each>
                   <p><xsl:value-of/></p>
                   <p><xsl:value-of/></p>
                   <p><xsl:value-of/></p>
                   <p></p>
               </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
