<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_test' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'L|DVo!-TPU^L[&#R4#C,#5aM{uf@v4g:UeE9IgPY7Sx2qik&=HOXny98W{h1z#a?' );
define( 'SECURE_AUTH_KEY',  '##=u&gI!>5. g|k UaY4ux{uSE$WCd7M@#||+oY-4s#5Sx5Lv2yP5Xzvo UDbt(Y' );
define( 'LOGGED_IN_KEY',    'BG6uuD50@Cq#k_~59jqd<H@8!s]_8}>KcSKX;MjFxOb#]f8<r;UjPwH`[v8$~2<X' );
define( 'NONCE_KEY',        'PNQ;dkbOo.xU,la|GTdT6rcEPAf?-QuTD9 [uYeSlW1d=1y^eAy~;@E<I_y_XgN`' );
define( 'AUTH_SALT',        'S?3q227,S:Pr_-2p;Xf#>|*m{nXrr,X27+92QeF(i$Id_3M!,}d]8UKgiLr<Jrmo' );
define( 'SECURE_AUTH_SALT', 'p`-ZtlDC^=rf}|7ghz+~R~E*k0BMSJ|4oI2ahG#6v`zxYX*f?Dx1@!~0ndR]$&,f' );
define( 'LOGGED_IN_SALT',   ']B6BRw6%D%GtN8nWLL%YlwHTkoD+xgD9&wti^2^6tG-(3Fmi]u/vX75i.KR,TwAZ' );
define( 'NONCE_SALT',       '[PG<fZ$} coV+R&T$Tp61/`pjZ:7N`9L,(c0r9c6w$5Q3_>< .wYJ-N^8[@LtUAW' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
