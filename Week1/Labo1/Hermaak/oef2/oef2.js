document.write("<table>")

for (let index = 0; index <= 10; index++) {

    if (index % 2) {
        document.write("<tr class='even' >")

    }else
    {
        document.write("<tr class='oneven' >")
    }

    document.write("<td>" + index * 10 + "</td>");

    document.write("</tr>")
}
document.write("</table>")