define(['jquery'], function() {
	var defaults = {
		activeItem: 1
	};

	var GHSlide = function(element, options){
		this.el = element;
        this.$el = $(this.el);

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;

        this.init();
	};

	GHSlide.prototype = {
		init: function(){
			var $this = this;

			this.$el.on('click', function(e){
            	e.preventDefault();
            	$this.changeItem();
            });

            this.textRun();
		},

		changeItem: function(){
			if(this.options.activeItem === this.options.maxItem){
				this.options.activeItem = 1;
			}else {
				this.options.activeItem++;
			}
			this.$el.find('.img-item').hide().removeClass('active')
				.find('.gh-am-left,.gh-am-right').removeClass('am-animation-slide-left am-animation-slide-right');
			this.$el.find('.img-item.slide-bac'+this.options.activeItem)
				.show()
				.addClass('active');
			this.textRun();
		},

		textRun: function(){
			var $this = this;
			var activeList = this.$el.find('.img-item.active');
			var animalDOM = activeList.find('[data-order]');

			var firstItem = activeList.find('[data-order=1]');

			this.isMoveLeft(firstItem);

			animalDOM.each(function(index, item){

				var everyItem = activeList.find('[data-order='+(index+1)+']');
				/*if($(item).hasClass('gh-am-left')){
					everyItem.addClass('am-animation-slide-left');
				}else{
					everyItem.addClass('am-animation-slide-right');					
				}*/

				everyItem.bind('oanimationend animationend webkitAnimationEnd', function() { 
				   $this.isMoveLeft(activeList.find('[data-order='+(index+2)+']'));
				   everyItem.off();
				});
			});
		},

		isMoveLeft: function(item){
			if(item.hasClass('gh-am-left')){
				item.addClass('am-animation-slide-left');
			}else{
				item.addClass('am-animation-slide-right');					
			}
		}
	};

	$.fn.GHSlide = function(options){
        return this.each(function(){
            if(!$.data(this, 'ghSlide')){
                $.data(this, 'ghSlide', new GHSlide(this, options));
            }
        });
    };
});