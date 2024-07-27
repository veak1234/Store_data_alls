<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Acme Themes
 * @subpackage Read More
 */
global $read_more_customizer_all_values;
$read_more_blog_archive_layout = $read_more_customizer_all_values['read-more-blog-archive-layout'];
$read_more_get_image_sizes_options = $read_more_customizer_all_values['read-more-blog-archive-image-layout'];
$read_more_blog_archive_read_more_text = $read_more_customizer_all_values['read-more-blog-archive-read-more-text'];
$read_more_content_length_options = $read_more_customizer_all_values['read-more-excerpt-length'];

$read_more_pagination_option = $read_more_customizer_all_values['read-more-pagination-option'];
$read_more_blog_archive_class = '';
if( 'default' != $read_more_pagination_option ){
	$read_more_blog_archive_class .= $read_more_blog_archive_layout.' acme-ajax';
}
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( $read_more_blog_archive_class); ?>>
	<div class="content-wrapper content-full">
		<?php read_more_entry_cats(); ?>
		<header class="entry-header">
			<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		</header><!-- .entry-header -->
		<?php
		if ( $read_more_customizer_all_values['read-more-blog-archive-layout'] == 'full-image' && has_post_thumbnail() ) {
			?>
			<!--post thumbnal options-->
			<a href="<?php the_permalink(); ?>" class="full-image">
				<?php
				the_post_thumbnail( $read_more_get_image_sizes_options, array( 'class' => 'aligncenter' ) );
				?>
			</a>
			<?php
		}
		?>
		<div class="row">
			<div class="col-md-3">
				<?php
				if ( 'post' === get_post_type() ) : ?>
					<div class="entry-meta">
						<?php read_more_posted_on(); ?>
					</div><!-- .entry-meta -->
					<?php
				endif; ?>
			</div>
			<div class="col-md-9">
				<div class="entry-content">
					<?php
					$excerpt = read_more_excerpt( $read_more_content_length_options);
					echo wpautop( $excerpt );
					if( !empty( $read_more_blog_archive_read_more_text ) ){
						?>
						<div class="btn-wrapper clearfix">
							<div class="btn-icon-box">
								<div class="btn-data">
									<a class="btn-links" href="<?php the_permalink(); ?> ">
										<?php echo esc_html( $read_more_blog_archive_read_more_text ); ?>
									</a>
								</div>
							</div>
						</div>
					<?php
					}
					?>
				</div><!-- .entry-content -->
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
</article><!-- #post-## -->