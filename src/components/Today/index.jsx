/* eslint-disable jsx-a11y/anchor-is-valid */
import { _, Images, LDS, Queries, Utils } from '../../common';

const Today = () => {
	const { data: userInfo } = Queries.useUserInfoQuery();
	const { data: profile } = Queries.useUserProfileQuery({ userInfo });

	return (
		<div className='root'>
			<div
				className='slds-size_1-of-1 tds-bg_white th-hero--custom'
				style={{ backgroundImage: `url(${Images.Trailhead.Banner})` }}
			></div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '-90px',
					marginBottom: '-10px',
				}}
			>
				<div style={{ width: '130px' }}>
					<svg width='100%' height='100%' viewBox='0 0 42 42'>
						<circle
							className='donut-hole'
							cx='21'
							cy='21'
							r='15.91549430918954'
							fill='#FFFFFF'
						></circle>
						<circle
							className='donut-ring'
							cx='21'
							cy='21'
							r='15.91549430918954'
							fill='transparent'
							stroke='#E3E3E3'
							strokeWidth='2'
						></circle>
						<circle
							className='donut-segment'
							cx='21'
							cy='21'
							r='15.91549430918954'
							fill='transparent'
							stroke='#2C7F5C'
							strokeWidth='2'
							strokeDasharray='0 100'
							strokeDashoffset='25'
						></circle>
						<clipPath id='user_avatar'>
							<circle r='13' cx='21' cy='21'></circle>
						</clipPath>
						<image
							href={Utils.getProfilePicture(userInfo, profile)}
							alt={Utils.getUserName(userInfo, profile)}
							width='30'
							height='30'
							x='6'
							y='6'
							clipPath='url(#user_avatar)'
						></image>
					</svg>
				</div>
			</div>
			<h1 className='tds-text-heading_neutraface-large slds-text-align_center slds-p-around--medium slds-m-bottom_medium'>
				{!_.isEmpty(Utils.getUserName(userInfo, profile))
					? `${Utils.getUserName(userInfo, profile)}, `
					: ''}
				let's learn something new today!
			</h1>
			<div>
				<div>
					<div className='slds-container_medium slds-container_center slds-p-bottom_x-large'>
						<div>
							<div className='th-first-steps-container slds-m-horizontal_medium slds-p-around_medium'>
								<div className='slds-text-heading_medium tds-text-size_6 slds-m-top_x-small slds-m-bottom_large'>
									Get Started with Trailhead and the Trailblazer Community
								</div>
								<div>
									<div className='th-first-step'>
										<div className='th-first-step-image'>
											<img alt='first-step' src={Images.Trailhead.FirstStep} />
											<div className='tds-dotted-trail'></div>
										</div>
										<div className='th-first-step-content th-first-step-content_bottom-bordered'>
											<div>
												<div className='slds-text-title'>Intro • ~ 2min</div>
												<a
													href='#'
													className='slds-text-heading_small tds-text_bold tds-color_brand'
													style={{ textDecoration: 'none' }}
												>
													Why Trailhead and the Trailblazer Community?
												</a>
												<div className='slds-text-body_small'>
													Discover how Trailhead and Trailblazer Community empower you to learn,
													earn, and connect from anywhere.
												</div>
											</div>
											<LDS.Button label='Read' className='tds-button_neutral' />
										</div>
									</div>
									<div className='th-first-step'>
										<div className='th-first-step-image'>
											<img
												alt='first-step'
												src={Images.Trailhead.Basics}
												className='th-first-step-image_grayscale'
											/>
										</div>
										<div className='th-first-step-content'>
											<div>
												<div className='slds-text-title'>Module • ~ 15min</div>
												<h2 className='slds-text-heading_small tds-text_bold tds-color_meteorite'>
													Trailhead and Trailblazer Community Basics
												</h2>
												<div className='slds-text-body_small'>
													Get a more detailed introduction on how Trailhead and the Trailblazer
													Community work.
												</div>
											</div>
											<LDS.Button label='Learn' disabled className='tds-button_neutral' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Today;
