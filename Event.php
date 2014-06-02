<?php

namespace Plugin\JustifyAlign;


class Event
{

    public static function ipBeforeController_100()
    {
        if (ipAdminId()) {
            ipAddJs('assets/tinymceConfig.js');
        }
    }

}
