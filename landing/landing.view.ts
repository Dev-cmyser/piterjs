namespace $.$$ {

	export class $piterjs_landing extends $.$piterjs_landing {

		/** Значение из словаря, объявленного в view.tree, по строковому ключу. */
		label< Dict extends Record< string, string > >( dict: Dict, id: string ) {
			return dict[ id ] ?? ''
		}

		// ===== Шапка =====

		@ $mol_mem
		meetup_num() {
			return this.meetup()?.title().match( /\d+/ )?.[0] ?? ''
		}

		meetup_tag() {
			const num = this.meetup_num()
			return num ? `v.${ num }.0` : ''
		}

		join_link_title() {
			const num = this.meetup_num()
			return num ? `[ Зарегистрироваться #${ num } ]` : '[ Регистрация ]'
		}

		@ $mol_mem
		nav_links() {
			return Object.keys( this.nav_titles() ).map( id => this.Nav_link( id ) )
		}

		nav_uri( id: string ) {
			return '#' + id
		}

		nav_title( id: string ) {
			return this.label( this.nav_titles(), id ) || id
		}

		@ $mol_mem
		menu_open( next?: boolean ) {
			return next ?? false
		}

		menu_toggle() {
			this.menu_open( !this.menu_open() )
		}

		menu_close() {
			this.menu_open( false )
		}

		// ===== Обратный отсчёт =====

		@ $mol_mem
		countdown() {
			const start = this.meetup()?.start()?.valueOf() ?? 0
			const left = Math.max( 0, start - $mol_state_time.now( 1000 ) )
			return {
				days: Math.floor( left / 86400000 ),
				hours: Math.floor( left / 3600000 ) % 24,
				minutes: Math.floor( left / 60000 ) % 60,
				seconds: Math.floor( left / 1000 ) % 60,
			} as Record< string, number >
		}

		@ $mol_mem
		countdown_units() {
			return Object.keys( this.timer_titles() ).map( id => this.Timer( id ) )
		}

		timer_value( id: string ) {
			return String( this.countdown()[ id ] ?? 0 ).padStart( 2, '0' )
		}

		timer_title( id: string ) {
			return this.label( this.timer_titles(), id ) || id
		}

		// ===== Ближайший митап =====

		event_title() {
			return this.meetup()?.title() ?? ''
		}

		event_time() {
			return this.meetup()?.start()?.toString( 'D Month YYYY // hh:mm', 'ru' ).toUpperCase() ?? ''
		}

		event_place() {
			const title = this.meetup()?.place().title()
			return title ? `${ title }, Санкт-Петербург`.toUpperCase() : ''
		}

		map_uri() {
			const address = this.meetup()?.place().address()
			return address ? 'https://yandex.ru/maps/?text=' + encodeURIComponent( address ) : ''
		}

		@ $mol_mem
		free_count() {
			const meetup = this.meetup()
			return ( meetup.place().capacity_max() ?? 0 ) - meetup.joined_count()
		}

		@ $mol_mem
		hero_badge() {
			const title = this.meetup()?.title()
			if( !title ) return ''
			if( !this.meetup().join_allowed() ) return `${ title.toUpperCase() } // РЕГИСТРАЦИЯ ЗАКРЫТА`
			const free = this.free_count()
			return `${ title.toUpperCase() } // ${ free > 0 ? `${ free } МЕСТ СВОБОДНО` : 'МЕСТ НЕТ' }`
		}

		// ===== Регистрация =====

		name_real( next?: string ) {
			return this.$.$mol_state_local.value( 'name_real', next ) ?? ''
		}

		person_name() {
			return this.name_real().trim().replace( /\s+/, ' ' )
		}

		join_hint() {
			const name = this.person_name()
			if( !name ) return 'Укажите имя и фамилию'
			if( !/\S{2,}\s\S{2,}/.test( name ) ) return 'От двух слов'
			return ''
		}

		joined( next?: boolean ) {
			const meetup = this.meetup()
			const peer = meetup.land.peer_id()
			if( next === true ) meetup.joined_name( peer, this.person_name() )
			if( next === false ) meetup.joined_name( peer, '' )
			return Boolean( meetup.joined_name( peer ) )
		}

		join_name_enabled() {
			return !this.joined()
		}

		join_enabled() {
			if( this.joined() ) return true
			if( this.join_hint() ) return false
			return this.free_count() > 0
		}

		join_free() {
			return `Свободно мест: ${ Math.max( 0, this.free_count() ) }`
		}

		@ $mol_mem
		join_content() {
			if( !this.meetup()?.join_allowed() ) return []
			return [
				this.Join_free(),
				this.Join_name(),
				this.Join_check(),
				... this.join_hint() ? [ this.Join_hint() ] : [],
			]
		}

		// ===== Манифест =====

		meetups_count() {
			return String( this.meetups().length )
		}

		// ===== Программа =====

		schedule_title() {
			const title = this.meetup()?.title()
			return title ? `ПРОГРАММА ${ title.toUpperCase() }` : 'ПРОГРАММА'
		}

		schedule_lead() {
			return this.meetup()?.description() ?? ''
		}

		@ $mol_mem
		speeches() {
			return this.meetup()?.speeches() ?? []
		}

		@ $mol_mem
		talks() {
			return this.speeches().map( speech => this.Talk( speech.id() ) )
		}

		@ $mol_mem_key
		speech( id: $mol_int62_string ) {
			return this.speeches().find( speech => speech.id() === id ) ?? null
		}

		talk_time( id: $mol_int62_string ) {
			return this.speech( id )?.start()?.toString( 'hh:mm' ) ?? ''
		}

		talk_title( id: $mol_int62_string ) {
			return this.speech( id )?.title() ?? ''
		}

		talk_lead( id: $mol_int62_string ) {
			return this.speech( id )?.description() ?? ''
		}

		talk_person_name( id: $mol_int62_string ) {
			return this.speech( id )?.speaker().title() ?? ''
		}

		talk_person_role( id: $mol_int62_string ) {
			return this.speech( id )?.speaker().description() ?? ''
		}

		talk_photo_uri( id: $mol_int62_string ) {
			return this.speech( id )?.speaker().photo_uri() ?? ''
		}

		@ $mol_mem_key
		talk_speaker( id: $mol_int62_string ) {
			const photo = this.speech( id )?.speaker().photo_blob()
			return [
				... photo?.size ? [ this.Talk_photo( id ) ] : [],
				this.Talk_person( id ),
			]
		}

		// ===== Площадка =====

		venue_title() {
			return this.meetup()?.place().title() ?? ''
		}

		@ $mol_mem
		venue_lines() {
			const place = this.meetup()?.place()
			if( !place ) return []
			return ( [ 'address', 'route', 'notes' ] as const )
				.filter( key => place[ key ]() )
				.map( key => this.Venue_line( key ) )
		}

		venue_line( id: 'address' | 'route' | 'notes' ) {
			return `${ this.venue_icons()[ id ] } ${ this.meetup()?.place()[ id ]() ?? '' }`
		}

		// ===== Архив =====

		@ $mol_mem
		archive_list() {
			const current = this.meetup()?.id()
			return this.meetups().filter( meetup => meetup.id() !== current )
		}

		category_of( meetup: $piterjs_meetup ) {
			const title = meetup.title()
			if( /ux/i.test( title ) ) return 'piterux'
			if( /conf/i.test( title ) ) return 'conf'
			return 'piterjs'
		}

		@ $mol_mem_key
		category_list( category: string ) {
			const list = this.archive_list()
			return category === 'all' ? list : list.filter( meetup => this.category_of( meetup ) === category )
		}

		@ $mol_mem
		category( next?: string ) {
			return next ?? 'all'
		}

		@ $mol_mem
		limit( next?: number ) {
			return next ?? 6
		}

		@ $mol_mem
		filters() {
			return Object.keys( this.filter_titles() )
				.filter( category => this.category_list( category ).length > 0 )
				.map( category => this.Filter( category ) )
		}

		filter_title( id: string ) {
			return this.label( this.filter_titles(), id ) || id
		}

		filter_current( id: string ) {
			return this.category() === id
		}

		filter_click( id: string ) {
			this.category( id )
			this.limit( 6 )
		}

		@ $mol_mem
		cards() {
			return this.category_list( this.category() )
				.slice( 0, this.limit() )
				.map( meetup => this.Card( meetup.id() ) )
		}

		@ $mol_mem
		archive_foot() {
			return this.category_list( this.category() ).length > this.limit() ? [ this.More() ] : []
		}

		more_click() {
			this.limit( this.limit() + 6 )
		}

		@ $mol_mem_key
		card_meetup( id: $mol_int62_string ) {
			return this.meetups().find( meetup => meetup.id() === id ) ?? null
		}

		card_tag( id: $mol_int62_string ) {
			return this.card_meetup( id )?.title().toUpperCase() ?? ''
		}

		card_title( id: $mol_int62_string ) {
			const meetup = this.card_meetup( id )
			return meetup?.description() || meetup?.speeches()[0]?.title() || ''
		}

		card_date( id: $mol_int62_string ) {
			return this.card_meetup( id )?.start()?.toString( 'D Month YYYY', 'ru' ) ?? ''
		}

		// ===== Сообщество и подвал =====

		@ $mol_mem
		community_cards() {
			return Object.keys( this.community_titles() ).map( id => this.Community_card( id ) )
		}

		community_badge( id: string ) {
			return this.label( this.community_badges(), id )
		}

		community_title( id: string ) {
			return this.label( this.community_titles(), id )
		}

		community_text( id: string ) {
			return this.label( this.community_texts(), id )
		}

		community_action( id: string ) {
			return this.label( this.community_actions(), id )
		}

		@ $mol_mem
		socials() {
			return Object.keys( this.social_uris() ).map( id => this.Social( id ) )
		}

		social_uri( id: string ) {
			return this.label( this.social_uris(), id )
		}

		social_hint( id: string ) {
			return this.label( this.social_hints(), id )
		}

		social_icon( id: string ) {
			return `/piterjs/landing/assets/${ id }.webp`
		}

	}

}
