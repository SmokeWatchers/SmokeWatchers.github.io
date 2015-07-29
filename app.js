/**
 * Created by Jam on 27/07/15.
 */

$(document).ready(function()
{
    selection($("#myselect"));
    selection($("#myselect2"));

    function selection(select)
    {
        for (var n in moment.tz._names)
        {
            select.append(new Option(moment.tz._names[n], n, true, true));
        }
    }

    myon($("#field2"), $("#myselect"), $("#display_loc"), $("#display_utc"), $("#display_swday"));
    myon($("#field3"), $("#myselect2"), $("#display_loc2"), $("#display_utc2"), $("#display_swday2"));

    function myon(fld, select, disp_loc, disp_utc, disp_swday)
    {
        fld.on("input", null, null, function()
        {
            field(fld, select, disp_loc, disp_utc, disp_swday);
        });

        select.on("change", null, null, function ()
        {
            field(fld, select, disp_loc, disp_utc, disp_swday);
        });
    }

    field($("#field2"), $("#myselect"), $("#display_loc"), $("#display_utc"), $("#display_swday"));
    field($("#field3"), $("#myselect2"), $("#display_loc2"), $("#display_utc2"), $("#display_swday2"));

    function field(field, select, disp_loc, disp_utc, disp_swday)
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