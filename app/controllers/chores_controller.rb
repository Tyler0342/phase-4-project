class ChoresController < ApplicationController

    def index 
        @current_user
        render json: @current_user.chores, status: :created
    end 

    def create 
        chore = @current_user.chores.create!(chore_params) 
        render json: chore, status: :created
    end

    private 

    def chore_params 
        params.permit(:description, :difficulty)
    end

end
end
