class TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_to do |f|
      f.json { render :json => @todos, only: [:id, :title, :completed, :description]}
    end
  end

  def create
    todo_params = params.require(:todo).permit(:title, :completed)
    @todo = Todo.create(todo_params)

    respond_to do |f|
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end

  # Fill in destroy
  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    respond_to do |f|
      f.json { render json: {}, status: 200}
    end
  end

  # Fill in update
  def update
    updated_todo = params.require(:todo).permit(:completed, :title, :description)
    todo = Todo.find(params[:id])
    todo.update_attributes(updated_todo)
    
    respond_to do |f|
      f.json {render json: @todo, only: [:id, :title, :completed, :description], status: 200}
    end
  end

  def show
    @todo = Todo.find(params[:id])
    respond_to do |f|
      f.html { render "main/index"}
      f.json { render :json => @todo, only: [:id, :title, :completed, :description]}
    end
  end
end
