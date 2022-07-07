<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
      <html>
       <title>Lenguaje de Marcas</title>
       <body>
            <xsl:apply-templates select = "//titulo"/>
            <xsl:apply-templates select = "//autor"/>
       </body>
      </html>
    </xsl:template>
    <xsl:template match = "titulo">
        <h1>Título libro: <xsl:value-of select = "."/></h1><br/>
    </xsl:template>
    <xsl:template match = "autor">
        <p>Nombre autor: <xsl:value-of select = "."/></p><br/>
    </xsl:template>
</xsl:stylesheet>
