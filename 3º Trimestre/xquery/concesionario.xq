
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Concesionarios del Sur: Modelos de coches</h1>
        <ul>
            {
                for $x in doc ("concesionario.xml")/concesionario/coche
                where $x/precio > 2500
                order by $x/modelo
                return <li> {data($x/modelo)}</li>
            }
        </ul>
    </body>
</html>