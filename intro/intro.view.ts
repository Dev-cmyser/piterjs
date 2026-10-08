namespace $.$$ {

	export class $piterjs_intro extends $.$piterjs_intro {

		page_ids() {
			return Object.keys( this.pages() )
		}

		Page() {
			return this.pages()[ this.page() || 'main' ]
		}

		place() {
			return this.meetup().place()
		}

		@ $mol_mem
		place_title() {
			return super.place_title().replace( '{place}' , this.place().title() )
		}
		
		// intro.view.ts
		@ $mol_mem
		place_image() {
			console.log( 'intro', this.meetup().id(), JSON.stringify( this.meetup().place_image() ) )
			return this.meetup().place_image()
		}

		place_notes() {
			return this.place().notes()
		}

		afterparty() {
			return this.meetup().afterparty()
		}

	}

}
