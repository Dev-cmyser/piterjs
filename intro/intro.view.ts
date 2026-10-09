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
		
		@ $mol_mem
		place_image() {
			return this.meetup().place_image()
		}
		
		@ $mol_mem
		partners_image() {
			return this.meetup().partners_image()
		}

		place_notes() {
			return this.place().notes()
		}

		afterparty() {
			return this.meetup().afterparty()
		}

	}

}
