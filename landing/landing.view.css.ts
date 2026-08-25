namespace $.$$ {

	/** Фирменный жёлтый лендинга: акцент на всех тёмных секциях и фон манифеста. */
	const yellow = '#fff313'
	const yellow_hover = '#ffe600'

	const black = '#000000'
	const white = '#ffffff'
	/** «Промышленный белый» — фон секции с программой и основной текст на тёмном. */
	const paper = '#eeeeee'
	const carbon = '#333333'
	const gunmetal = '#4b4b4b'
	const aluminum = '#afafaf'

	/** Синевато-чёрный фон архива с сеткой координатных точек. */
	const blueprint = '#0b0d13'

	const mono = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
	const sans = "'Inter', 'Space Grotesk', ui-sans-serif, system-ui, -apple-system, sans-serif"

	/** backdrop-filter принимает только фильтр-функции, строкой его не задать. */
	const blur = ( radius: string ) => new $mol_style_func( 'blur', radius )

	/** Контентная колонка: одна ширина у шапки, всех секций и подвала. */
	const column = '1200px'

	/** Отбивка секции: сверху-снизу воздух, по бокам поля до края экрана. */
	const section_pad = { top: '90px', bottom: '90px', left: '32px', right: '32px' } as const

	/** Секция целиком: центрируем внутреннюю колонку. */
	const section = {
		display: 'flex',
		justifyContent: 'center',
		padding: section_pad,
	} as const

	/** Внутренняя колонка секции. */
	const section_body = {
		display: 'flex',
		flex: { direction: 'column' },
		width: '100%',
		maxWidth: column,
	} as const

	/** Заголовок секции: тонкий, плотный, капсом. */
	const section_title = {
		font: {
			size: $mol_style_func.clamp( '28px', '4vw', '44px' ),
			weight: 300,
		},
		letterSpacing: '-0.04em',
		textTransform: 'uppercase',
	} as const

	/** Мелкая моноширинная надпись-ярлык над карточкой. */
	const badge = {
		font: { family: mono, size: '11px', weight: 700 },
		letterSpacing: '1px',
		color: yellow,
	} as const

	/** Жёлтая кнопка-призыв. */
	const button_accent = {
		alignSelf: 'flex-start',
		background: { color: yellow },
		color: black,
		font: { family: mono, size: '13px', weight: 700 },
		padding: { top: '10px', bottom: '10px', left: '20px', right: '20px' },
		border: { radius: '6px' },
		minWidth: 0,
		minHeight: 0,
		textDecoration: 'none',
		cursor: 'pointer',
		transition: 'background-color 0.15s ease',
		':hover': {
			background: { color: yellow_hover },
			color: black,
		},
	} as const

	/** Карточка на светлой секции. */
	const card_light = {
		background: { color: white },
		border: { width: '1px', style: 'solid', color: '#dcdcdc', radius: '9px' },
		padding: { top: '28px', bottom: '28px', left: '28px', right: '28px' },
		display: 'flex',
		flex: { direction: 'column' },
	} as const

	$mol_style_define( $piterjs_landing, {

		display: 'block',
		flex: { grow: 1, shrink: 1, basis: '100%' },
		width: '100%',
		maxWidth: '100%',
		height: '100vh',
		overflow: { x: 'hidden', y: 'auto' },
		background: { color: black },
		color: paper,
		font: { family: sans },
		position: 'relative',
		boxSizing: 'border-box',
		margin: { top: 0, bottom: 0, left: 0, right: 0 },
		padding: { top: 0, bottom: 0, left: 0, right: 0 },

		// ===== Шапка =====

		Head: {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			zIndex: 1000,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: { top: '16px', bottom: '16px', left: '36px', right: '36px' },
			background: { color: '#000000d9' },
			backdropFilter: blur( '12px' ),
			border: { bottom: { width: '1px', style: 'solid', color: '#ffffff1a' } },
			boxSizing: 'border-box',
		},

		Head_row: {
			width: '100%',
			maxWidth: column,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: '12px',
		},

		Logo: {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			padding: { top: 0, bottom: 0, left: 0, right: 0 },
			minWidth: 0,
			minHeight: 0,
			color: white,
			textDecoration: 'none',
			':hover': {
				background: { color: 'transparent' },
			},
		},

		Logo_icon: {
			width: '28px',
			height: '28px',
			border: { radius: '4px' },
		},

		Logo_name: {
			font: { family: mono, size: '16px', weight: 700 },
			letterSpacing: '1px',
			color: white,
		},

		Logo_tag: {
			font: { family: mono, size: '10px', weight: 700 },
			padding: { top: '2px', bottom: '2px', left: '6px', right: '6px' },
			background: { color: yellow },
			color: black,
			border: { radius: '4px' },
		},

		Nav: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			background: { color: '#1a1a1a' },
			padding: { top: '4px', bottom: '4px', left: '6px', right: '6px' },
			border: { width: '1px', style: 'solid', color: carbon, radius: '6px' },
		},

		Nav_link: {
			padding: { top: '6px', bottom: '6px', left: '14px', right: '14px' },
			minWidth: 0,
			minHeight: 0,
			font: { size: '13px', weight: 500 },
			color: aluminum,
			textDecoration: 'none',
			border: { radius: '4px' },
			transition: 'color 0.2s ease, background-color 0.2s ease',
			':hover': {
				color: white,
				background: { color: '#ffffff14' },
			},
		},

		Head_tools: {
			display: 'flex',
			alignItems: 'center',
			gap: '12px',
		},

		Back: {
			font: { family: mono, size: '12px' },
			color: aluminum,
			textDecoration: 'none',
			padding: { top: '8px', bottom: '8px', left: '12px', right: '12px' },
			minWidth: 0,
			minHeight: 0,
			border: { width: '1px', style: 'solid', color: carbon, radius: '6px' },
			background: { color: 'transparent' },
			transition: 'color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease',
			':hover': {
				color: yellow,
				border: { color: yellow },
				background: { color: '#fff31314' },
			},
		},

		Join_link: {
			background: { color: yellow },
			color: black,
			font: { family: mono, size: '13px', weight: 700 },
			padding: { top: '8px', bottom: '8px', left: '16px', right: '16px' },
			minWidth: 0,
			minHeight: 0,
			display: 'inline-flex',
			alignItems: 'center',
			border: { radius: '6px' },
			textDecoration: 'none',
			cursor: 'pointer',
			transition: 'background-color 0.15s ease',
			':hover': {
				background: { color: yellow_hover },
				color: black,
			},
		},

		Burger: {
			display: 'none',
			width: '32px',
			height: '32px',
			minWidth: '32px',
			minHeight: '32px',
			padding: { top: 0, bottom: 0, left: 0, right: 0 },
			background: { color: 'transparent' },
			position: 'relative',
			alignSelf: 'center',
			cursor: 'pointer',
			':hover': {
				background: { color: 'transparent' },
			},
		},

		Burger_bar_1: {
			position: 'absolute',
			left: $mol_style_func.calc( '50% - 12px' ),
			top: $mol_style_func.calc( '50% - 8px' ),
			width: '24px',
			height: '2px',
			border: { radius: '2px' },
			background: { color: yellow },
			transition: 'top 0.25s ease, transform 0.25s ease, opacity 0.25s ease',
			transformOrigin: '50% 50%',
		},

		Burger_bar_2: {
			position: 'absolute',
			left: $mol_style_func.calc( '50% - 12px' ),
			top: $mol_style_func.calc( '50% - 1px' ),
			width: '24px',
			height: '2px',
			border: { radius: '2px' },
			background: { color: yellow },
			transition: 'top 0.25s ease, transform 0.25s ease, opacity 0.25s ease',
			transformOrigin: '50% 50%',
		},

		Burger_bar_3: {
			position: 'absolute',
			left: $mol_style_func.calc( '50% - 12px' ),
			top: $mol_style_func.calc( '50% + 6px' ),
			width: '24px',
			height: '2px',
			border: { radius: '2px' },
			background: { color: yellow },
			transition: 'top 0.25s ease, transform 0.25s ease, opacity 0.25s ease',
			transformOrigin: '50% 50%',
		},

		// Открытое меню: три полоски складываются в симметричный крестик.
		'[piterjs_landing_menu]': {
			'true': {
				Burger_bar_1: {
					top: $mol_style_func.calc( '50% - 1px' ),
					transform: 'rotate(45deg)',
				},
				Burger_bar_2: {
					opacity: 0,
					transform: 'scaleX(0)',
				},
				Burger_bar_3: {
					top: $mol_style_func.calc( '50% - 1px' ),
					transform: 'rotate(-45deg)',
				},
			},
		},

		// ===== Каркас =====

		Main: {
			display: 'flex',
			flex: { direction: 'column' },
			width: '100%',
		},

		// ===== Первый экран =====

		Hero: {
			position: 'relative',
			minHeight: '100vh',
			display: 'flex',
			flex: { direction: 'column' },
			justifyContent: 'center',
			alignItems: 'center',
			padding: { top: '130px', bottom: '60px', left: '36px', right: '36px' },
			background: { color: black },
			overflow: 'hidden',
			boxSizing: 'border-box',
		},

		Hero_video: {
			position: 'absolute',
			inset: '0px',
			width: '100%',
			height: '100%',
			objectFit: 'cover',
			objectPosition: 'center',
			zIndex: 0,
			pointerEvents: 'none',
			border: { width: 0 },
		},

		Hero_scrim: {
			position: 'absolute',
			inset: '0px',
			zIndex: 1,
			pointerEvents: 'none',
			backgroundImage: 'radial-gradient(circle at 80% 20%, #fff3130d 0%, transparent 40%), linear-gradient(to bottom, #00000066, #000000f2)',
		},

		Hero_body: {
			width: '100%',
			maxWidth: column,
			position: 'relative',
			zIndex: 2,
			display: 'flex',
			flex: { direction: 'column' },
			gap: '24px',
		},

		Hero_badge: {
			alignSelf: 'flex-start',
			display: 'inline-flex',
			alignItems: 'center',
			background: { color: '#111111' },
			border: { width: '1px', style: 'solid', color: carbon, radius: '6px' },
			padding: { top: '6px', bottom: '6px', left: '14px', right: '14px' },
			font: { family: mono, size: '11px', weight: 600 },
			letterSpacing: '0.5px',
			color: yellow,
		},

		Hero_title: {
			font: { size: '64px', weight: 300 },
			lineHeight: '1.05',
			letterSpacing: '-2.56px',
			color: paper,
			textTransform: 'uppercase',
			display: 'flex',
			flex: { direction: 'column' },
			gap: '4px',
		},

		Hero_title_top: {
			color: paper,
		},

		Hero_title_bottom: {
			display: 'flex',
			alignItems: 'baseline',
			gap: '16px',
		},

		Hero_title_accent: {
			color: yellow,
		},

		Hero_title_rest: {
			color: paper,
		},

		Hero_lead: {
			font: { size: $mol_style_func.clamp( '16px', '1.8vw', '20px' ), weight: 300 },
			color: '#cccccc',
			maxWidth: '1000px',
			lineHeight: '1.5',
		},

		Hero_grid: {
			display: 'grid',
			gridTemplateColumns: '1fr 480px',
			gap: '32px',
			alignItems: 'flex-end',
			width: '100%',
			margin: { top: 'auto' },
		},

		// ===== Обратный отсчёт =====

		Countdown: {
			background: { color: '#2d2d2dbf' },
			border: { width: '1px', style: 'solid', color: gunmetal, radius: '12px' },
			padding: { top: '24px', bottom: '24px', left: '32px', right: '32px' },
			backdropFilter: blur( '10px' ),
			display: 'flex',
			flex: { direction: 'column' },
			gap: '16px',
			boxShadow: '0 10px 30px #00000080',
		},

		Countdown_title: {
			font: { family: mono, size: '11px' },
			color: aluminum,
			textTransform: 'uppercase',
			letterSpacing: '0.5px',
		},

		Countdown_units: {
			display: 'flex',
			gap: '36px',
			alignItems: 'flex-start',
		},

		Timer: {
			display: 'flex',
			flex: { direction: 'column' },
			alignItems: 'flex-start',
		},

		Timer_value: {
			font: { family: mono, size: '38px', weight: 400 },
			color: yellow,
			lineHeight: '1',
			margin: { bottom: '6px' },
		},

		Timer_title: {
			font: { size: '10px' },
			color: aluminum,
			textTransform: 'uppercase',
			letterSpacing: '0.5px',
		},

		// ===== Карточка ближайшего митапа =====

		Event: {
			background: { color: '#2b2b2b' },
			border: { width: '1px', style: 'solid', color: gunmetal, radius: '12px' },
			padding: { top: '26px', bottom: '26px', left: '28px', right: '28px' },
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
			position: 'relative',
			overflow: 'hidden',
			boxShadow: '0 20px 40px #00000099',
		},

		Event_badge: {
			font: { family: mono, size: '11px', weight: 600 },
			color: yellow,
			textTransform: 'uppercase',
			letterSpacing: '0.5px',
		},

		Event_title: {
			font: { size: '19px', weight: 500 },
			color: white,
			lineHeight: '1.4',
		},

		Event_time: {
			font: { size: '13px' },
			color: aluminum,
		},

		Event_place: {
			font: { size: '13px' },
			color: aluminum,
		},

		Event_map: {
			alignSelf: 'flex-start',
			font: { family: mono, size: '11px' },
			color: yellow,
			background: { color: '#fff31314' },
			border: { width: '1px', style: 'solid', color: '#fff31366', radius: '6px' },
			padding: { top: '4px', bottom: '4px', left: '12px', right: '12px' },
			minWidth: 0,
			minHeight: 0,
			textDecoration: 'none',
			display: 'inline-flex',
			alignItems: 'center',
			cursor: 'pointer',
			transition: 'background-color 0.2s ease, color 0.2s ease',
			':hover': {
				background: { color: yellow },
				color: black,
				border: { color: yellow },
			},
		},

		// ===== Регистрация =====

		Join: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '10px',
			margin: { top: '4px' },
			padding: { top: '16px' },
			border: { top: { width: '1px', style: 'solid', color: gunmetal } },
		},

		Join_free: {
			font: { family: mono, size: '11px' },
			color: aluminum,
			textTransform: 'uppercase',
			letterSpacing: '0.5px',
		},

		Join_name: {
			background: { color: '#1a1a1a' },
			border: { width: '1px', style: 'solid', color: gunmetal, radius: '6px' },
			padding: { top: '10px', bottom: '10px', left: '12px', right: '12px' },
			color: white,
			font: { family: sans, size: '14px' },
			':focus': {
				border: { color: yellow },
			},
		},

		Join_check: {
			alignSelf: 'flex-start',
			background: { color: yellow },
			color: black,
			font: { family: mono, size: '13px', weight: 700 },
			padding: { top: '8px', bottom: '8px', left: '16px', right: '16px' },
			minWidth: 0,
			minHeight: 0,
			border: { radius: '6px' },
			cursor: 'pointer',
			':hover': {
				background: { color: yellow_hover },
			},
		},

		Join_hint: {
			font: { family: mono, size: '11px' },
			color: '#ff8a8a',
		},

		// ===== Манифест =====

		Manifesto: {
			... section,
			background: { color: yellow },
			color: black,
		},

		Manifesto_body: {
			... section_body,
			gap: '60px',
		},

		Manifesto_quote: {
			font: { size: $mol_style_func.clamp( '24px', '3.8vw', '44px' ), weight: 400 },
			lineHeight: '1.25',
			letterSpacing: '-0.03em',
			color: black,
			maxWidth: '1050px',
		},

		Stats: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
			gap: '24px',
			border: { top: { width: '2px', style: 'solid', color: '#00000026' } },
			padding: { top: '40px' },
		},

		Stat_meetups: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '6px',
		},

		Stat_open: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '6px',
		},

		Stat_meetups_value: {
			font: { family: mono, size: $mol_style_func.clamp( '32px', '4vw', '48px' ), weight: 700 },
			color: black,
			letterSpacing: '-1px',
		},

		Stat_open_value: {
			font: { family: mono, size: $mol_style_func.clamp( '32px', '4vw', '48px' ), weight: 700 },
			color: black,
			letterSpacing: '-1px',
		},

		Stat_meetups_title: {
			font: { size: '14px', weight: 500 },
			color: carbon,
			lineHeight: '1.3',
		},

		Stat_open_title: {
			font: { size: '14px', weight: 500 },
			color: carbon,
			lineHeight: '1.3',
		},

		// ===== Программа =====

		Schedule: {
			... section,
			background: { color: paper },
			color: black,
		},

		Schedule_body: {
			... section_body,
			gap: '36px',
		},

		Schedule_title: {
			... section_title,
			color: black,
		},

		Schedule_lead: {
			font: { size: '18px' },
			color: gunmetal,
			maxWidth: '800px',
			lineHeight: '1.5',
			margin: { top: '-16px' },
		},

		Talks: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
			gap: '24px',
		},

		Talk: {
			... card_light,
			gap: '16px',
			transition: 'border-color 0.15s ease, background-color 0.15s ease',
			':hover': {
				border: { color: black },
				background: { color: '#fcfcfc' },
			},
		},

		Talk_time: {
			alignSelf: 'flex-start',
			font: { family: mono, size: '11px', weight: 700 },
			background: { color: black },
			color: yellow,
			padding: { top: '4px', bottom: '4px', left: '10px', right: '10px' },
			border: { radius: '4px' },
		},

		Talk_title: {
			font: { size: '20px', weight: 600 },
			color: black,
			lineHeight: '1.35',
		},

		Talk_lead: {
			font: { size: '14px' },
			color: '#555555',
			lineHeight: '1.5',
		},

		Talk_speaker: {
			display: 'flex',
			flex: { direction: 'row' },
			alignItems: 'flex-start',
			gap: '14px',
			margin: { top: 'auto' },
			padding: { top: '16px' },
			border: { top: { width: '1px', style: 'solid', color: paper } },
		},

		Talk_photo: {
			width: '52px',
			height: '52px',
			border: { radius: '50%', width: '2px', style: 'solid', color: yellow },
			objectFit: 'cover',
			flex: { shrink: 0 },
		},

		Talk_person: {
			display: 'flex',
			flex: { direction: 'column', grow: 1, shrink: 1, basis: 'auto' },
			alignItems: 'flex-start',
			gap: '4px',
			minWidth: 0,
		},

		Talk_person_name: {
			font: { size: '15px', weight: 600 },
			color: black,
			lineHeight: '1.3',
		},

		Talk_person_role: {
			font: { family: mono, size: '12px' },
			color: '#666666',
			whiteSpace: 'normal',
			wordBreak: 'break-word',
			lineHeight: '1.45',
			width: '100%',
		},

		// ===== Заявка на доклад =====

		Cfp: {
			background: { color: black },
			color: white,
			border: { radius: '9px' },
			padding: { top: '32px', bottom: '32px', left: '32px', right: '32px' },
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
		},

		Cfp_badge: badge,

		Cfp_title: {
			font: { size: '22px', weight: 400 },
			letterSpacing: '-0.02em',
		},

		Cfp_text: {
			font: { size: '15px' },
			color: aluminum,
			lineHeight: '1.5',
			maxWidth: '800px',
		},

		Cfp_link: {
			... button_accent,
			margin: { top: '8px' },
		},

		// ===== Площадка =====

		Venue: {
			... card_light,
			gap: '8px',
		},

		Venue_badge: {
			font: { family: mono, size: '11px', weight: 700 },
			color: '#777777',
		},

		Venue_title: {
			font: { size: '22px', weight: 600 },
			color: black,
		},

		Venue_lines: {
			display: 'flex',
			flex: { direction: 'column' },
			gap: '4px',
		},

		Venue_line: {
			font: { size: '14px' },
			color: '#444444',
		},

		Venue_map: {
			alignSelf: 'flex-start',
			display: 'inline-flex',
			width: 'auto',
			minWidth: 0,
			minHeight: 0,
			color: black,
			font: { family: mono, size: '13px', weight: 600 },
			margin: { top: '8px' },
			textDecoration: 'underline',
			background: { color: 'transparent' },
			padding: { top: 0, bottom: 0, left: 0, right: 0 },
			':hover': {
				color: black,
				background: { color: 'transparent' },
				textDecoration: 'none',
			},
		},

		// ===== Архив =====

		Archive: {
			... section,
			background: { color: blueprint },
			backgroundImage: 'radial-gradient(circle, #fff3131f 1px, transparent 1px)',
			backgroundSize: '24px 24px',
			color: white,
			border: { top: { width: '1px', style: 'solid', color: '#1f2430' } },
			position: 'relative',
		},

		Archive_body: {
			... section_body,
			gap: '32px',
		},

		Archive_title: section_title,

		Archive_filters: {
			display: 'flex',
			gap: '8px',
			flex: { wrap: 'wrap' },
		},

		Filter: {
			background: { color: '#11141c' },
			color: '#9aa2b4',
			border: { width: '1px', style: 'solid', color: '#242938', radius: '6px' },
			padding: { top: '8px', bottom: '8px', left: '20px', right: '20px' },
			minWidth: 0,
			minHeight: 0,
			font: { family: mono, size: '13px', weight: 500 },
			cursor: 'pointer',
			transition: 'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
			':hover': {
				color: white,
				border: { color: '#4a5368' },
				background: { color: '#181d28' },
			},
			'[piterjs_landing_filter_current]': {
				'true': {
					background: { color: yellow },
					color: black,
					border: { color: yellow },
					font: { weight: 700 },
					boxShadow: '0 0 16px #fff31366',
				},
			},
		},

		Archive_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
			gap: '20px',
		},

		Card: {
			background: { color: '#0e1118eb' },
			backdropFilter: blur( '8px' ),
			border: { width: '1px', style: 'solid', color: '#202636', radius: '9px' },
			padding: { top: '24px', bottom: '24px', left: '24px', right: '24px' },
			display: 'flex',
			flex: { direction: 'column' },
			gap: '12px',
			minWidth: 0,
			minHeight: 0,
			textDecoration: 'none',
			transition: 'border-color 0.2s ease',
			':hover': {
				border: { color: yellow },
				background: { color: '#0e1118eb' },
			},
		},

		Card_tag: {
			font: { family: mono, size: '11px', weight: 700 },
			color: yellow,
		},

		Card_title: {
			font: { size: '16px', weight: 500 },
			color: white,
			lineHeight: '1.4',
		},

		Card_date: {
			font: { family: mono, size: '12px' },
			color: '#838a9c',
			margin: { top: 'auto' },
			padding: { top: '12px' },
			border: { top: { width: '1px', style: 'solid', color: '#1c2130' } },
		},

		Archive_foot: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: { top: '16px' },
			width: '100%',
		},

		More: {
			background: { color: '#11141c' },
			border: { width: '1px', style: 'solid', color: '#242938', radius: '6px' },
			color: yellow,
			font: { family: mono, size: '13px', weight: 700 },
			padding: { top: '12px', bottom: '12px', left: '36px', right: '36px' },
			minWidth: 0,
			minHeight: 0,
			letterSpacing: '0.5px',
			cursor: 'pointer',
			transition: 'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
			boxShadow: '0 4px 12px #00000066',
			':hover': {
				background: { color: yellow },
				color: black,
				border: { color: yellow },
			},
		},

		// ===== Сообщество =====

		Community: {
			... section,
			background: { color: '#161616' },
			color: white,
			border: { top: { width: '1px', style: 'solid', color: '#282828' } },
		},

		Community_body: {
			... section_body,
			gap: '32px',
		},

		Community_title: section_title,

		Community_cards: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
			gap: '24px',
		},

		Community_card: {
			background: { color: '#0d0d0d' },
			border: { width: '1px', style: 'solid', color: '#2e2e2e', radius: '9px' },
			padding: { top: '32px', bottom: '32px', left: '32px', right: '32px' },
			display: 'flex',
			flex: { direction: 'column' },
			gap: '14px',
			height: '100%',
			boxSizing: 'border-box',
		},

		Community_badge: badge,

		Community_card_title: {
			font: { size: '22px', weight: 600 },
			color: white,
		},

		Community_text: {
			font: { size: '14px' },
			color: '#aaaaaa',
			lineHeight: '1.5',
			margin: { bottom: '14px' },
		},

		Community_link: {
			alignSelf: 'flex-start',
			font: { family: mono, size: '12px' },
			color: yellow,
			textDecoration: 'none',
			padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
			minWidth: 0,
			minHeight: 0,
			border: { width: '1px', style: 'solid', color: yellow, radius: '6px' },
			margin: { top: 'auto' },
			display: 'inline-flex',
			alignItems: 'center',
			cursor: 'pointer',
			transition: 'background-color 0.2s ease, color 0.2s ease',
			':hover': {
				background: { color: yellow },
				color: black,
			},
		},

		// ===== Подвал =====

		Foot: {
			background: { color: black },
			border: { top: { width: '1px', style: 'solid', color: '#222222' } },
			padding: { top: '32px', bottom: '32px', left: '36px', right: '36px' },
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			boxSizing: 'border-box',
		},

		Foot_body: {
			width: '100%',
			maxWidth: column,
			display: 'flex',
			flex: { direction: 'column' },
			gap: '16px',
		},

		Foot_row: {
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			flex: { wrap: 'wrap' },
			gap: '20px',
		},

		Foot_brand: {
			display: 'flex',
			alignItems: 'center',
			gap: '12px',
		},

		Foot_logo: {
			width: '24px',
			height: '24px',
			border: { radius: '4px' },
		},

		Foot_copy: {
			font: { family: mono, size: '12px' },
			color: '#777777',
		},

		Foot_socials: {
			display: 'flex',
			alignItems: 'center',
			gap: '16px',
		},

		Social: {
			background: { color: 'transparent' },
			padding: { top: 0, bottom: 0, left: 0, right: 0 },
			margin: { top: 0, bottom: 0, left: 0, right: 0 },
			minWidth: 0,
			minHeight: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			opacity: 0.6,
			cursor: 'pointer',
			transition: 'opacity 0.15s ease',
			':hover': {
				background: { color: 'transparent' },
				opacity: 1,
			},
		},

		Social_icon: {
			width: '22px',
			height: '22px',
			objectFit: 'contain',
			display: 'block',
		},

		Foot_credit: {
			display: 'flex',
			alignItems: 'center',
			gap: '6px',
		},

		Foot_credit_title: {
			font: { family: mono, size: '11px' },
			color: '#555555',
			letterSpacing: '0.5px',
		},

		Foot_credit_link: {
			background: { color: 'transparent' },
			padding: { top: 0, bottom: 0, left: 0, right: 0 },
			minWidth: 0,
			minHeight: 0,
			font: { family: mono, size: '11px' },
			color: '#777777',
			textDecoration: 'none',
			textTransform: 'uppercase',
			letterSpacing: '0.5px',
			lineHeight: '1',
			display: 'inline-block',
			transition: 'color 0.15s ease',
			':hover': {
				background: { color: 'transparent' },
				color: yellow,
				textDecoration: 'underline',
			},
		},

		'@media': {

			'(max-width: 1200px)': {
				Back: {
					display: 'none',
				},
			},

			// Ниже планшета навигация уезжает в выдвижную шторку под шапкой.
			'(max-width: 992px)': {

				Burger: {
					display: 'flex',
				},

				Head: {
					background: { color: '#000000f2' },
				},

				Nav: {
					position: 'fixed',
					top: '60px',
					left: 0,
					width: '100%',
					background: { color: '#161616' },
					border: {
						width: 0,
						bottom: { width: '1px', style: 'solid', color: gunmetal },
					},
					borderRadius: '0 0 16px 16px',
					flex: { direction: 'column' },
					padding: { top: '20px', bottom: '20px', left: '20px', right: '20px' },
					gap: '12px',
					transform: 'translateY(-110%)',
					opacity: 0,
					pointerEvents: 'none',
					transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
					boxShadow: '0 16px 32px #000000cc',
					zIndex: 900,
				},

				Nav_link: {
					textAlign: 'center',
					padding: { top: '12px', bottom: '12px', left: '12px', right: '12px' },
					font: { size: '16px' },
					color: paper,
					border: { width: '1px', style: 'solid', color: '#2a2a2a', radius: '8px' },
					background: { color: '#111111' },
					':hover': {
						color: yellow,
						background: { color: '#222222' },
					},
				},

				'[piterjs_landing_menu]': {
					'true': {
						Nav: {
							transform: 'translateY(0)',
							opacity: 1,
							pointerEvents: 'auto',
						},
					},
				},

				Hero_title: {
					font: { size: '44px' },
					letterSpacing: '-1.5px',
				},

				Hero_grid: {
					gridTemplateColumns: '1fr',
					gap: '24px',
				},

				Event: {
					order: '1',
				},

				Countdown: {
					order: '2',
				},

				Manifesto_quote: {
					font: { size: '32px' },
					lineHeight: '1.25',
				},

				Stats: {
					gridTemplateColumns: '1fr 1fr',
				},

				Talks: {
					gridTemplateColumns: '1fr',
				},

				Archive_grid: {
					gridTemplateColumns: '1fr 1fr',
				},

				Community_cards: {
					gridTemplateColumns: '1fr',
				},

				Foot_row: {
					flex: { direction: 'column' },
					textAlign: 'center',
				},

				Foot_brand: {
					flex: { direction: 'column' },
				},
			},

			'(max-width: 768px)': {

				Head: {
					padding: { top: '12px', bottom: '12px', left: '16px', right: '16px' },
				},

				Head_tools: {
					gap: '8px',
				},

				Join_link: {
					padding: { top: '6px', bottom: '6px', left: '12px', right: '12px' },
					font: { size: '12px' },
					lineHeight: '1',
				},
			},

			'(max-width: 600px)': {

				Head: {
					padding: { top: '10px', bottom: '10px', left: '12px', right: '12px' },
				},

				Join_link: {
					padding: { top: '6px', bottom: '6px', left: '10px', right: '10px' },
					font: { size: '11px' },
				},

				Hero: {
					padding: { top: '90px', bottom: '48px', left: '12px', right: '12px' },
				},

				Manifesto: {
					padding: { top: '48px', bottom: '48px', left: '12px', right: '12px' },
				},

				Schedule: {
					padding: { top: '48px', bottom: '48px', left: '12px', right: '12px' },
				},

				Archive: {
					padding: { top: '48px', bottom: '48px', left: '12px', right: '12px' },
				},

				Community: {
					padding: { top: '48px', bottom: '48px', left: '12px', right: '12px' },
				},

				Foot: {
					padding: { top: '32px', bottom: '32px', left: '12px', right: '12px' },
				},

				Countdown: {
					padding: { top: '20px', bottom: '20px', left: '16px', right: '16px' },
				},

				Event: {
					padding: { top: '20px', bottom: '20px', left: '16px', right: '16px' },
				},

				Talk: {
					padding: { top: '20px', bottom: '20px', left: '16px', right: '16px' },
				},

				Venue: {
					padding: { top: '20px', bottom: '20px', left: '16px', right: '16px' },
				},

				Card: {
					padding: { top: '20px', bottom: '20px', left: '16px', right: '16px' },
				},

				Cfp: {
					padding: { top: '24px', bottom: '24px', left: '16px', right: '16px' },
				},

				Community_card: {
					padding: { top: '24px', bottom: '24px', left: '16px', right: '16px' },
				},

				Hero_title: {
					font: { size: '30px' },
					letterSpacing: '-1px',
				},

				Hero_title_bottom: {
					flex: { wrap: 'wrap' },
					gap: '8px',
				},

				Manifesto_quote: {
					font: { size: '22px' },
					lineHeight: '1.3',
				},

				Stats: {
					gridTemplateColumns: '1fr',
					gap: '20px',
				},

				Archive_grid: {
					gridTemplateColumns: '1fr',
					gap: '16px',
				},

				Countdown_units: {
					gap: '14px',
					flex: { wrap: 'nowrap' },
				},

				Timer_value: {
					font: { size: '26px' },
				},
			},

			'(max-width: 480px)': {

				Join_link: {
					display: 'none',
				},

				Hero_title: {
					font: { size: '26px' },
				},

				Manifesto_quote: {
					font: { size: '20px' },
				},

				Hero: {
					padding: { top: '80px', bottom: '40px', left: '10px', right: '10px' },
				},

				Manifesto: {
					padding: { top: '40px', bottom: '40px', left: '10px', right: '10px' },
				},

				Schedule: {
					padding: { top: '40px', bottom: '40px', left: '10px', right: '10px' },
				},

				Archive: {
					padding: { top: '40px', bottom: '40px', left: '10px', right: '10px' },
				},

				Community: {
					padding: { top: '40px', bottom: '40px', left: '10px', right: '10px' },
				},

				Foot: {
					padding: { top: '24px', bottom: '24px', left: '10px', right: '10px' },
				},
			},
		},

	} )

}
