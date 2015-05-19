<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i755997_rr9d1');

/** MySQL database username */
define('DB_USER', 'i755997_rr9d1');

/** MySQL database password */
define('DB_PASSWORD', 'V]RI9zCG]K63[&1');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'C1p0tDaKosj67OnAjIll2vDNV0uGT2hIicHXuD1Oep55M1KgxnHthqGhP20BLQuz');
define('SECURE_AUTH_KEY',  '3DvBRUEJIq85mm3w8X5XcTyVRnNnBMpB8bqoXyHq2dDwkJEjl3SAea8zViBYJSmL');
define('LOGGED_IN_KEY',    'RUjgyulQZjNwcAxguJLWKRQGuGKBujHUmT3BmD0j5SoOStNNbKJ9slLTtSLywaB5');
define('NONCE_KEY',        'gjCmcsVZ23WwymYZb6G5tIaY5hfzhkkehMh42Xtx9xGiWvezTefGiE8Ym7nkDHqV');
define('AUTH_SALT',        'UPutFdIEnriFl06o5fMTtShClZnWEdntqZYwouVPXvNSPMm792DBatdzsZ6wlugD');
define('SECURE_AUTH_SALT', 'Y4zBXABU7jzh9JcUvwBjdNcg9u8i33VBpENKZWncXKJNCSAsKLpo43RRrDyxZVef');
define('LOGGED_IN_SALT',   'RtuL02h3rZUYA4MrCI0A9PfTaMTX52RmDGEBjeKCH9kPEtcsvLOhFhTInuTEm7PM');
define('NONCE_SALT',       'bKQ3Vo0QmfNrIBzRhmtB1ACPbNe0N1iPXVGCQ38vbAbnWrHPpDT0zD6cYovV2H2h');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'rr9d_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
