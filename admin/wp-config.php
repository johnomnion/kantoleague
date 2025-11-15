<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kantolea_national' );

/** Database username */
define( 'DB_USER', 'kantolea_db_user' );

/** Database password */
define( 'DB_PASSWORD', 'WS3TXPq$+-DS' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':JKRg,c%<chx &oqD1Vhefh>)1[P-{@.IImD%rQ$5Jw{wv[]y~&N}M_f?l9u~]8y' );
define( 'SECURE_AUTH_KEY',  '.Jy$Ras9)SdvJsKR4KTy ,AqS=lIQ.=90$aCI=INNx] js>dmNNeMjN^Xt}h2EeQ' );
define( 'LOGGED_IN_KEY',    '}/ljmCTW[-l)nFC:Q|F|J:(gA-=]*;8L6,nuR:A&2B4~yXl$1R}U>@4^=2&1?LFS' );
define( 'NONCE_KEY',        'A*S?U3EVQ0eb9V+: Qq0%{C#-6#/4yt&FiW0my&_f*/ht=u+GNZdhaCS(<QbjRA:' );
define( 'AUTH_SALT',        'eqP-)6QaHO7l+I3VIPU:5x,}h[H&bU!;B.@`C%~1<n*D<=98{.2,OEkN(x!1QPFt' );
define( 'SECURE_AUTH_SALT', 'LqVBj1IXt%&m ncEY;mOX*okThVbcd~YMW(>eS`RIU|+vwz*EDk;Hm0&E!:mZ8zH' );
define( 'LOGGED_IN_SALT',   'e]$Z]AHsw%O;`3Ysom`U6`k3-:,r4_n7ew@&wA62PGEBbazJ#qTMG5h9Y}@awB$U' );
define( 'NONCE_SALT',       'Y%Uj_e6r2js{l_{G3BM^Ew%PhG/~kkl_+8aU<CXNuekfLwK9CI6$=z5Y$pay?8Z.' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
