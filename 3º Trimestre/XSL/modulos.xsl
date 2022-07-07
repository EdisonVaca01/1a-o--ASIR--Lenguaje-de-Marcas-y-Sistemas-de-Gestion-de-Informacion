<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    <xsl:variable name="totalpaco" select="count(//modulo[@profesor='Paco'])" />
    <xsl:variable name="totalsergio" select="count(//modulo[@profesor='Sergio'])" />
    <xsl:variable name="totalnaza" select="count(//modulo[@profesor='Naza'])" />
    <xsl:template match="/">
        <html>
            <head>
                <title>Practica 6. XSL</title>
                <link rel="stylesheet" type="text/css" href="modulos.css" />
            </head>
            <body>
                <table>
                    <tr>
                        <td>Nombres</td>
                        <td>Apellidos</td>
                        <td>Correo</td>
                    </tr>
                    <xsl:for-each select="//autor">
                        <tr>
                            <td>
                                <xsl:value-of select="./nombre" />
                            </td>
                            <td>
                                <xsl:value-of select="./apellidos" />
                            </td>
                            <td>
                                <xsl:value-of select="./correo" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Nombre</td>
                        <td>Profesor</td>
                        <td>Tecnologías</td>
                    </tr>
                    <xsl:for-each select="//curso[@nombre = 'primero']/modulo">
                        <xsl:sort select="./@profesor" />
                        <tr>
                            <td>
                                <xsl:value-of select="./@id" />
                            </td>
                            <td>
                                <xsl:value-of select="./@nombre" />
                            </td>
                            <td>
                                <xsl:value-of select="./@profesor" />
                            </td>
                            <td>
                                <xsl:value-of select="./@tecnologias" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Nombre</td>
                        <td>Profesor</td>
                        <td>Tecnologías</td>
                    </tr>
                    <xsl:for-each select="//curso[@nombre = 'segundo']/modulo">
                        <xsl:sort select="./@tecnologias" />
                        <tr>
                            <td>
                                <xsl:value-of select="./@id" />
                            </td>
                            <td>
                                <xsl:value-of select="./@nombre" />
                            </td>
                            <td>
                                <xsl:value-of select="./@profesor" />
                            </td>
                            <td>
                                <xsl:value-of select="./@tecnologias" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <table>
                    <tr>
                        <td>Nombre</td>
                        <td>Correo</td>
                        <td>Materia</td>
                    </tr>
                    <xsl:for-each select="//profesor">
                        <xsl:if test="@id = '1'">
                            <tr>
                                <td>
                                    <xsl:value-of select="./nombre" />
                                </td>
                                <td>
                                    <xsl:value-of select="./correo" />
                                </td>
                                <td>
                                    <xsl:value-of select="$totalsergio" />
                                </td>
                            </tr>
                        </xsl:if>
                        <xsl:if test="@id = '2'">
                            <tr>
                                <td>
                                    <xsl:value-of select="./nombre" />
                                </td>
                                <td>
                                    <xsl:value-of select="./correo" />
                                </td>
                                <td>
                                    <xsl:value-of select="$totalnaza" />
                                </td>
                            </tr>
                        </xsl:if>
                        <xsl:if test="@id = '3'">
                            <tr>
                                <td>
                                    <xsl:value-of select="./nombre" />
                                </td>
                                <td>
                                    <xsl:value-of select="./correo" />
                                </td>
                                <td>
                                    <xsl:value-of select="$totalpaco" />
                                </td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                    <h1>
                        EL PROFE QUE MAS MODULOS IMPARTE ES:
                        <xsl:choose>
                            <xsl:when test="//profesor[@id = '1']/materia > //profesor[@id = '3']/materia">
                                <xsl:value-of select="//profesor[@id = '1']/nombre" />
                                con
                                <xsl:value-of select="$totalsergio" />
                                modulos
                            </xsl:when>
                            <xsl:when test="//profesor[@id = '2']/materia > //profesor[@id = '3']/materia">
                                <xsl:value-of select="//profesor[@id = '2']/nombre" />
                                con
                                <xsl:value-of select="$totalnaza" />
                                modulos
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="//profesor[@id = '3']/nombre" />
                                con
                                <xsl:value-of select="$totalpaco" />
                                modulos
                            </xsl:otherwise>
                        </xsl:choose>
                    </h1>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>