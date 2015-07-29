/**
 * Created by Jam on 27/07/15.
 */

$(document).ready(function()
{
    init_tz($("#inputz"));
    init_tz($("#inputz2"));

    function init_tz(select)
    {
        for (var n in moment.tz._names)
        {
            select.append(new Option(moment.tz._names[n], n, true, true));
        }
    }

    modif_event($("#inputdate"), $("#inputz"), $("#display_loc"), $("#display_utc"), $("#display_swday"));
    modif_event($("#inputdate2"), $("#inputz2"), $("#display_loc2"), $("#display_utc2"), $("#display_swday2"));

    function modif_event(fld, select, disp_loc, disp_utc, disp_swday)
    {
        fld.on("input", null, null, function()
        {
            display_date(fld, select, disp_loc, disp_utc, disp_swday);
        });

        select.on("change", null, null, function ()
        {
            display_date(fld, select, disp_loc, disp_utc, disp_swday);
        });
    }

    display_date($("#inputdate"), $("#inputz"), $("#display_loc"), $("#display_utc"), $("#display_swday"));
    display_date($("#inputdate2"), $("#inputz2"), $("#display_loc2"), $("#display_utc2"), $("#display_swday2"));

    function display_date(field, select, disp_loc, disp_utc, disp_swday)
    {
        var fil = field.val();
        var reg = /[0-9]+\-/;
        var val = select.val();

        if (reg.test(fil) == true)
            var now = moment(fil);
        else
            var now = moment.unix(fil);
        disp_loc.text(now.tz(val).format());
        disp_utc.text(now.tz("UTC").format());
        disp_swday.text(now.subtract(4, 'hours').tz(val).format("YYYY-MM-DD"));
    }
});