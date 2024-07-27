import './TodosLoading.css';
import React from 'react';


function TodosLoading() {
    return (
        <div>
            <div className="LoadingTodo-container">
                <span className="LoadingTodo-completeIcon"></span>
                <p className="LoadingTodo-text"></p>
                <span className="LoadingTodo-deleteIcon"></span>
            </div>
            <div className="LoadingTodo-container">
                <span className="LoadingTodo-completeIcon"></span>
                <p className="LoadingTodo-text"></p>
                <span className="LoadingTodo-deleteIcon"></span>
            </div>
            <div className="LoadingTodo-container">
                <span className="LoadingTodo-completeIcon"></span>
                <p className="LoadingTodo-text"></p>
                <span className="LoadingTodo-deleteIcon"></span>
            </div>
        </div>
       
      );
}

export {TodosLoading}