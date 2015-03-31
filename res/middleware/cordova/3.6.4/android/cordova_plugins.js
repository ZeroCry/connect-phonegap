{
    "prepare_queue": {
        "installed": [],
        "uninstalled": []
    },
    "config_munge": {
        "files": {
            "res/xml/config.xml": {
                "parents": {
                    "/*": [
                        {
                            "xml": "<feature name=\"File\"><param name=\"android-package\" value=\"org.apache.cordova.file.FileUtils\" /><param name=\"onload\" value=\"true\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"FileTransfer\"><param name=\"android-package\" value=\"org.apache.cordova.filetransfer.FileTransfer\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Globalization\"><param name=\"android-package\" value=\"org.apache.cordova.globalization.Globalization\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"InAppBrowser\"><param name=\"android-package\" value=\"org.apache.cordova.inappbrowser.InAppBrowser\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Media\"><param name=\"android-package\" value=\"org.apache.cordova.media.AudioHandler\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Capture\"><param name=\"android-package\" value=\"org.apache.cordova.mediacapture.Capture\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"NetworkStatus\"><param name=\"android-package\" value=\"org.apache.cordova.networkinformation.NetworkManager\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"SplashScreen\"><param name=\"android-package\" value=\"org.apache.cordova.splashscreen.SplashScreen\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"StatusBar\"><param name=\"android-package\" onload=\"true\" value=\"org.apache.cordova.statusbar.StatusBar\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Vibration\"><param name=\"android-package\" value=\"org.apache.cordova.vibration.Vibration\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Battery\"><param name=\"android-package\" value=\"org.apache.cordova.batterystatus.BatteryListener\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Camera\"><param name=\"android-package\" value=\"org.apache.cordova.camera.CameraLauncher\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Contacts\"><param name=\"android-package\" value=\"org.apache.cordova.contacts.ContactManager\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Device\"><param name=\"android-package\" value=\"org.apache.cordova.device.Device\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Accelerometer\"><param name=\"android-package\" value=\"org.apache.cordova.devicemotion.AccelListener\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Compass\"><param name=\"android-package\" value=\"org.apache.cordova.deviceorientation.CompassListener\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Notification\"><param name=\"android-package\" value=\"org.apache.cordova.dialogs.Notification\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"Insomnia\"><param name=\"android-package\" value=\"nl.xservices.plugins.Insomnia\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"ADBMobile_PhoneGap\"><param name=\"android-package\" value=\"com.adobe.ADBMobile_PhoneGap\" /></feature>",
                            "count": 1
                        },
                        {
                            "xml": "<feature name=\"BarcodeScanner\"><param name=\"android-package\" value=\"com.phonegap.plugins.barcodescanner.BarcodeScanner\" /></feature>",
                            "count": 1
                        }
                    ]
                }
            },
            "AndroidManifest.xml": {
                "parents": {
                    "/*": [
                        {
                            "xml": "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
                            "count": 5
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
                            "count": 2
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
                            "count": 2
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
                            "count": 2
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.RECORD_VIDEO\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.READ_CONTACTS\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.WRITE_CONTACTS\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\" />",
                            "count": 1
                        }
                    ],
                    "/manifest": [
                        {
                            "xml": "<uses-permission android:name=\"android.permission.VIBRATE\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.INTERNET\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.CAMERA\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-permission android:name=\"android.permission.FLASHLIGHT\" />",
                            "count": 1
                        },
                        {
                            "xml": "<uses-feature android:name=\"android.hardware.camera\" android:required=\"false\" />",
                            "count": 1
                        }
                    ],
                    "/manifest/application": [
                        {
                            "xml": "<activity android:clearTaskOnLaunch=\"true\" android:configChanges=\"orientation|keyboardHidden\" android:exported=\"false\" android:name=\"com.google.zxing.client.android.CaptureActivity\" android:screenOrientation=\"landscape\" android:theme=\"@android:style/Theme.NoTitleBar.Fullscreen\" android:windowSoftInputMode=\"stateAlwaysHidden\"><intent-filter><action android:name=\"com.phonegap.plugins.barcodescanner.SCAN\" /><category android:name=\"android.intent.category.DEFAULT\" /></intent-filter></activity>",
                            "count": 1
                        },
                        {
                            "xml": "<activity android:label=\"@string/share_name\" android:name=\"com.google.zxing.client.android.encode.EncodeActivity\"><intent-filter><action android:name=\"com.phonegap.plugins.barcodescanner.ENCODE\" /><category android:name=\"android.intent.category.DEFAULT\" /></intent-filter></activity>",
                            "count": 1
                        },
                        {
                            "xml": "<activity android:label=\"@string/share_name\" android:name=\"com.google.zxing.client.android.HelpActivity\"><intent-filter><action android:name=\"android.intent.action.VIEW\" /><category android:name=\"android.intent.category.DEFAULT\" /></intent-filter></activity>",
                            "count": 1
                        }
                    ]
                }
            },
            "res/values/strings.xml": {
                "parents": {
                    "/resources": [
                        {
                            "xml": "<string name=\"app_picker_name\">Applications</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"bookmark_picker_name\">Bookmarks</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_add_calendar\">Add to calendar</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_add_contact\">Add contact</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_back\">Back</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_book_search\">Book Search</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_cancel\">Cancel</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_custom_product_search\">Custom search</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_dial\">Dial number</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_done\">Done</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_email\">Send email</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_get_directions\">Get directions</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_google_shopper\">Shopper</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_mms\">Send MMS</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_ok\">OK</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_open_browser\">Open browser</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_product_search\">Product Search</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_search_book_contents\">Search contents</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_share_app\">Application</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_share_bookmark\">Bookmark</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_share_by_email\">Share via email</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_share_by_sms\">Share via SMS</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_share_clipboard\">Clipboard</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_share_contact\">Contact</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_show_map\">Show map</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_sms\">Send SMS</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_web_search\">Web search</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"button_wifi\">Connect to Network</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"contents_contact\">Contact info</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"contents_email\">Email address</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"contents_location\">Geographic coordinates</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"contents_phone\">Phone number</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"contents_sms\">SMS address</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"contents_text\">Plain text</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"history_clear_text\">Clear history</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"history_clear_one_history_text\">Clear</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"history_email_title\">Barcode Scanner history</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"history_empty\">Empty</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"history_empty_detail\">No barcode scans have been recorded</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"history_send\">Send history</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"history_title\">History</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"menu_encode_mecard\">Use MECARD</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"menu_encode_vcard\">Use vCard</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"menu_help\">Help</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"menu_history\">History</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"menu_share\">Share</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_bulk_mode_scanned\">Bulk mode: barcode scanned and saved</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_camera_framework_bug\">Sorry, the Android camera encountered a problem. You may need to restart the device.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_default_format\">Format</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_default_meta\">Metadata</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_default_mms_subject\">Hi</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_default_status\">Place a barcode inside the viewfinder rectangle to scan it.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_default_time\">Time</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_default_type\">Type</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_encode_contents_failed\">Could not encode a barcode from the data provided.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_google_books\">Google Books</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_google_product\">Google Product Search</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_google_shopper_missing\">Google Shopper is not installed</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_install_google_shopper\">Google Shopper combines barcode scanning with online and local prices, reviews and more without opening the browser. Would you like to try it?</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_intent_failed\">Sorry, the requested application could not be launched. The barcode contents may be invalid.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_redirect\">Redirect</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_book_not_searchable\">Sorry, this book is not searchable.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_failed\">Sorry, the search encountered a problem.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_no_page_returned\">No page returned</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_page\">Page</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_results\">Results</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_searching_book\">Searching book\\u2026</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_snippet_unavailable\">Snippet not available</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sbc_unknown_page\">Unknown page</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_share_explanation\">You can share data by displaying a barcode on your screen and scanning it with another phone.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_share_subject_line\">Here are the contents of a barcode I scanned</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_share_text\">Or type some text and press Enter</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_sure\">Are you sure?</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"msg_unmount_usb\">Sorry, the SD card is not accessible.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_actions_title\">When a barcode is found\\u2026</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_auto_focus_title\">Use auto focus</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_bulk_mode_summary\">Scan and save many barcodes continuously</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_bulk_mode_title\">Bulk scan mode</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_copy_to_clipboard_title\">Copy to clipboard</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string formatted=\"false\" name=\"preferences_custom_product_search_summary\">Substitutions: %s = contents, %f = format, %t = type</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_custom_product_search_title\">Custom search URL</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_decode_1D_title\">1D barcodes</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_decode_Data_Matrix_title\">Data Matrix</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_decode_QR_title\">QR Codes</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_device_bug_workarounds_title\">Device Bug Workarounds</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_disable_continuous_focus_summary\">Use only standard focus mode</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_disable_continuous_focus_title\">No continuous focus</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_disable_exposure_title\">No exposure</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_front_light_summary\">Improves scanning in low light on some phones, but may cause glare. Does not work on all phones.</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_front_light_title\">Use front light</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_general_title\">General settings</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_name\">Settings</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_play_beep_title\">Beep</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_remember_duplicates_summary\">Store multiple scans of the same barcode in History</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_remember_duplicates_title\">Remember duplicates</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_result_title\">Result settings</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_scanning_title\">When scanning for barcodes, decode\\u2026</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_search_country\">Search country</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_try_bsplus\">Try Barcode Scanner+</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_try_bsplus_summary\">Enhanced with new features and interface</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_supplemental_summary\">Try to retrieve more information about the barcode contents</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_supplemental_title\">Retrieve more info</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"preferences_vibrate_title\">Vibrate</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_address_book\">Found contact info</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_calendar\">Found calendar event</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_email_address\">Found email address</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_geo\">Found geographic coordinates</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_isbn\">Found book</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_product\">Found product</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_sms\">Found SMS address</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_tel\">Found phone number</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_text\">Found plain text</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_uri\">Found URL</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"result_wifi\">Found WLAN Configuration</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"sbc_name\">Google Book Search</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"share_name\">Share via barcode</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"wifi_changing_network\">Requesting connection to network\\u2026</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"wifi_ssid_label\">Network Name</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"wifi_type_label\">Type</string>",
                            "count": 1
                        }
                    ]
                }
            }
        }
    },
    "installed_plugins": {
        "org.apache.cordova.file": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.file-transfer": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.geolocation": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.globalization": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.inappbrowser": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.media": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.media-capture": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.network-information": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.splashscreen": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.statusbar": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.vibration": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.battery-status": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.camera": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.console": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.contacts": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.device": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.device-motion": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.device-orientation": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "org.apache.cordova.dialogs": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "nl.x-services.plugins.insomnia": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "ADBMobile": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        },
        "com.phonegap.plugins.barcodescanner": {
            "PACKAGE_NAME": "com.adobe.phonegap.app"
        }
    },
    "dependent_plugins": {}
}