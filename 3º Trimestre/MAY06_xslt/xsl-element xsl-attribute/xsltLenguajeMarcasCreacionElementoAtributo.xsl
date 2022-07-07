<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml"/>
    <xsl:template match = "/">
        <alumnos>
            <xsl:for-each select = "//alumno">
                <xsl:element name = "alumno">
                    <alumno xsl:use-attribute-sets = "alumno"/>
                    <xsl:copy-of select = "./*"/>
                </xsl:element>
            </xsl:for-each>
        </alumnos>
        <xsl:attribute-set name="alumno">
            <xsl:attribute name="aula">Bikini</xsl:attribute>
            <xsl:attribute name="planta">Primera</xsl:attribute>
        </xsl:attribute-set>
    </xsl:template>
</xsl:stylesheet>
